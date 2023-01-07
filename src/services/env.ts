/* import { config } from 'dotenv';
 import { join } from 'path';

config({ path: join(process.cwd(), '.env') });
Old cold
*/
// updated code. 
import { config } from 'dotenv';
import { join } from 'path';
import { parse } from 'yargs';
import
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
loadEnvFile(join(process.cwd(), .env.${env}));
}

// Parse command-line arguments using yargs
const { env } = parse();

// Load the .env file for the specified environment
if (env) {
loadEnvFileForEnv(env);
} else {
// Load the .env file from the current working directory
loadEnvFile(join(process.cwd(), '.env'));
}

// Override configuration values using command-line arguments
process.argv.forEach((arg: string) => {
  const [key, value] = arg.split('=');
  if (key && value) {
  process.env[key] = value;
  }
  });
  
  // Load the .env file from the current working directory
  loadEnvFile(join(process.cwd(), '.env'));
  
  // Override configuration values using command-line arguments
  process.argv.forEach((arg: string) => {
  const [key, value] = arg.split('=');
  if (key && value) {
  process.env[key] = value;
  }
  });
