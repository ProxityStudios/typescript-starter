import { LogLevel } from "typescript-logging";
import { Log4TSProvider, Logger } from "typescript-logging-log4ts-style";

const provider = Log4TSProvider.createProvider("MainProvider", {
  groups: [{
    expression: new RegExp("model.+"),
    level: LogLevel.Debug,
  }, {
    expression: new RegExp("service.+"),
  }],
});

export function getLogger(name: string): Logger {
  return provider.getLogger(name);
}