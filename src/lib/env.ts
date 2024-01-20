import { config } from 'dotenv';
import { join } from 'node:path';
import { Logger } from 'tslog';
import { parseSync } from 'yargs';

/**
 * Typescript doesnt have support to get list of keys from an interface
 */
class EnvClass {
	NODE_ENV!: 'development' | 'production';

	BOOLEAN!: boolean;

	NUMBER!: number;
}
export interface Env extends EnvClass {}
export type EnvKeys = keyof Env;
export type EnvKeysArray = Array<EnvKeys>;

const envLogger = new Logger({ type: 'pretty', name: 'Environment' });

function runChecks() {
	const envClass = new EnvClass();
	const keys: EnvKeysArray = Object.keys(envClass) as EnvKeysArray;
	const undefinedKeys: string[] = [];

	keys.forEach((key) => {
		// TODO: check the types as well
		const env = getEnv(key);

		if (!env) {
			undefinedKeys.push(key);
		}
	});

	if (undefinedKeys.length > 0) {
		throw new Error(
			`[UNDEFINED_ENV_KEYS] Setup these env keys: ${undefinedKeys.join(', ')}`
		);
	}
}

export function isDeveloperMode(): boolean {
	if (getEnv('NODE_ENV') === 'development') return true;
	return false;
}

// Function that retrieves the value of an environment variable
export function getEnv<T extends EnvKeys>(key: T): Env[T] {
	return process.env[key] as Env[T];
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

runChecks();
