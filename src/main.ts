import './utils/env';
import { logger } from './utils/logger';
import { getEnvKey } from './utils/env';

async function main() {
  try {
    console.log('APP DEBUG MODE:', getEnvKey('APPLICATION_DEBUG_ENABLED'));

    logger.info('Please star and contribute the repository :)');
    logger.info('---> https://github.com/ProxityStudios/typescript-starter');
    // DO STUFF
  } catch (error) {
    throw error; // or console.error(error)
  }
}

main();
