/**
 * If you installed the "TODO Highlighting" extension,
 * you can use the these prefixes:
 *
 * TODO: Something that should be done.
 * FIXME: Something that should be fixed.
 * HACK: Something that should be removed.
 * DEBUG: Something that should be fixed, but isn't.
 * REVIEW: Something that should be reviewed.
 * NOTE: Something that should be noted.
 *
 * ?: Stuff that isn't important.
 */

import './services/env';

import { Logger } from 'tslog';

const mainLogger = new Logger({ type: "pretty", name: "MainLogger" });

async function main() {
   try {
      // Log a message using the synchronous logger
      mainLogger.silly('Please star or contribute the repository :)');
      mainLogger.silly('https://github.com/ProxityStudios/typescript-starter');

      // awesome code to here
   } catch (error: any) {
      // Log the error message
      mainLogger.error(error.message);
   }
}

main();
