import { type ILogObj, Logger, type ILogObjMeta } from 'tslog';
import { createStream } from 'rotating-file-stream';

export enum LoggerName {
  APP = 'TS_Starter',
}

// BUG: getSublogger creates an instance each time when its called.
class CustomLogger extends Logger<ILogObj> {

  override debug(...args: unknown[]): (ILogObj & ILogObjMeta) | undefined {
    if (process.env.APPLICATION_DEBUG_ENABLED === 'true') return super.debug(...args);
  }

//   get example(): CustomLogger {
//     return this.getSubLogger({ name: LoggerName.EXAMPLE }) as CustomLogger;
//   }
}

let loggerInstance: CustomLogger;
function getLoggerOrCreate(name: LoggerName = LoggerName.APP) {
  if (loggerInstance) return loggerInstance;
    
  const currDate = new Date();
    const stream = createStream(
      `${process.cwd()}/logs/${currDate.getUTCFullYear()}-${currDate.getUTCMonth()}-${currDate.getUTCDay()}.log`,
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
      hideLogPositionForProduction: process.env.NODE_ENV === 'production' ? true : false,
    });
    loggerInstance.attachTransport((logObj) => {
      stream.write(JSON.stringify(logObj) + '\n');
    });

  return loggerInstance;
}

export const logger = getLoggerOrCreate();