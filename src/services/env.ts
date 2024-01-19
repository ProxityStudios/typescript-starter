import { config } from 'dotenv';
import { join } from 'node:path';
import { Logger } from 'tslog';
import { parseSync } from 'yargs';

export interface Env {
	NODE_ENV: 'development' | 'production';
	TOKEN: string;
}

export type EnvKeys = keyof Env;

const envLogger = new Logger({ type: 'pretty', name: 'Environment' });

// Function that retrieves the value of an environment variable
export function getEnv(name: EnvKeys, defaultValue = ''): string {
	return process.env[name] || defaultValue;
}

// Function that retrieves the value of an environment variable as a boolean
export function getEnvAsBool(name: EnvKeys, defaultValue = false): boolean {
	const value = getEnv(name);
	return value === 'true' || value === '1'
		? true
		: value === 'false' || value === '0'
			? false
			: defaultValue;
}

// Function that retrieves the value of an environment variable as a number
export function getEnvAsNumber(name: EnvKeys, defaultValue = 0): number {
	const value = getEnv(name);
	return Number.isNaN(Number(value)) ? defaultValue : Number(value);
}

// Function that loads the .env file from a specific location
export function loadEnvFile(path: string) {
	config({ path });
}

// Function that loads the .env file for a specific environment
export function loadEnvFileForEnv(env: string) {
	loadEnvFile(join(process.cwd(), `.env.${env}`));
}

// Parse command-line arguments using yargs
const { env } = parseSync();

// Load the .env file for the specified environment
if (env) {
	envLogger.info(`Loading the ".env.${env as string}" file`);
	loadEnvFileForEnv(env as string);
} else {
	envLogger.info('Loading ".env" file from the current working directory');
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
