import { type ILogObj, Logger, type ILogObjMeta } from 'tslog';
import { createStream } from 'rotating-file-stream';
import * as fs from 'node:fs';
import { getEnvKey } from './env';

export enum LoggerName {
  APP = 'TS_Starter',
}

// BUG: getSublogger creates an instance each time when its called.
class CustomLogger extends Logger<ILogObj> {
  override debug(...args: unknown[]): (ILogObj & ILogObjMeta) | undefined {
    if (getEnvKey('APPLICATION_DEBUG_ENABLED') === 'true') return super.debug(...args);
  }

  //   get example(): CustomLogger {
  //     return this.getSubLogger({ name: LoggerName.EXAMPLE }) as CustomLogger;
  //   }
}

let loggerInstance: CustomLogger;
function getLoggerOrCreate(name: LoggerName = LoggerName.APP) {
  if (loggerInstance) return loggerInstance;

  fs.mkdirSync(`${process.cwd()}/logs`, { recursive: true });
  const currDate = new Date();
  const stream = createStream(
    `${process.cwd()}/logs/utc_yyyy+${currDate.getUTCFullYear()}-mm+${currDate.getUTCMonth()}-dd+${currDate.getUTCDay()}.log`,
    {
      size: '10M',
      interval: '1d',
      compress: 'gzip',
    }
  );

  loggerInstance = new CustomLogger({
    name,
    type: 'pretty',
    stylePrettyLogs: true,
    prettyLogTemplate: '{{dateIsoStr}}\t {{logLevelName}}\t {{name}} \t',
    hideLogPositionForProduction: getEnvKey('NODE_ENV') === 'production',
  });
  loggerInstance.attachTransport((logObj) => {
    stream.write(JSON.stringify(logObj) + '\n');
  });

  return loggerInstance;
}

export const logger = getLoggerOrCreate();
