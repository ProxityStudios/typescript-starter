/*import { createLogger, format, transports } from 'winston';

const logsPath: string =
   process.env.NODE_ENV === 'production ' ? 'logs/production' : 'logs/development';

export const Logger = createLogger({
   level: 'info',
   format: format.json(),
   transports: [
      new transports.File({ filename: `${logsPath}/error.log`, level: 'error' }),
      new transports.File({ filename: `${logsPath}/warn.log`, level: 'warn' }),
      new transports.File({ filename: `${logsPath}/combined.log` }),
   ],
});

if (process.env.NODE_ENV !== 'production') {
   Logger.add(
      new transports.Console({
         format: format.simple(),
      }),
   );
}
old cold
*/
// new code.
import { config } from 'dotenv';
import { join } from 'path';

// Function that retrieves the value of an environment variable
export function getEnv(name: string, defaultValue: string = ''): string {
  return process.env[name] || defaultValue;
}

// Function that retrieves the value of an environment variable as a boolean
export function getEnvAsBool(name: string, defaultValue: boolean = false): boolean {
  const value = getEnv(name);
  return value === 'true' || value === '1' ? true : value === 'false' || value === '0' ? false : defaultValue;
}

// Function that retrieves the value of an environment variable as a number
export function getEnvAsNumber(name: string, defaultValue: number = 0): number {
  const value = getEnv(name);
  return !isNaN(Number(value)) ? Number(value) : defaultValue;
}

// Function that loads the .env file from a specific location
export function loadEnvFile(path: string) {
  config({ path });
}

// Function that loads the .env file for a specific environment
export function loadEnvFileForEnv(env: string) {
  loadEnvFile(join(process.cwd(), `.env.${env}`));
}

// Load the .env file from the current working directory
loadEnvFile(join(process.cwd(), '.env'));

// Override configuration values using command-line arguments
process.argv.forEach((arg) => {
  const [key, value] = arg.split('=');
  if (key && value) {
    process.env[key] = value;
  }
});
