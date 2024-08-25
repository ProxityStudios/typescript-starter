import { config } from 'dotenv';
import { parseSync } from 'yargs';
import { join } from 'node:path';
import { logger } from './logger';

class EnvClass {
  NODE_ENV!: 'development' | 'production';

  APPLICATION_DEBUG_ENABLED!: 'true' | 'false';
}

export function loadEnvFile(path: string) {
  config({ path });
}

export function loadEnvFileForEnv(env: string) {
  loadEnvFile(join(process.cwd(), `.env.${env}`));
}

export function getEnvKey<T extends EnvKeys>(key: T): Env[T] {
  return process.env[key] as Env[T];
}

export function isDeveloperMode(): boolean {
  return getEnvKey('NODE_ENV') === 'development';
}

const { env } = parseSync();

if (env) {
  logger.debug(`Loading env file: ".env.${env}"`);
  loadEnvFileForEnv(env as string);
} else {
  logger.info('Loading ".env" file from the current working directory');
  loadEnvFile(join(process.cwd(), '.env'));
}

process.argv.forEach((arg: string) => {
  const [key, value] = arg.split('=');
  if (key && value) {
    process.env[key] = value;
  }
});

const envClass = new EnvClass();
const keys: EnvKeysArray = Object.keys(envClass) as EnvKeysArray;
const undefinedKeys: string[] = [];

keys.forEach((key) => {
  // TODO: validate defined type of the key
  const envKey = getEnvKey(key);

  if (!envKey) {
    undefinedKeys.push(key);
  }
});

if (undefinedKeys.length > 0) {
  throw new Error(`[UNDEFINED_ENV_KEYS] Not set keys: ${undefinedKeys.join(', ')}`);
}

// types
export interface Env extends EnvClass {}
export type EnvKeys = keyof Env;
export type EnvKeysArray = Array<EnvKeys>;
