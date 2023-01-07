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

import { parseSync } from 'yargs';
import './services/env';
import { getEnv } from './services/env';
import { getLogger } from './services/logger';

const Logger = getLogger("model.Main")

// Parse command-line arguments using yargs
const { task } = parseSync();

async function main() {
   try {
      // Log a message using the synchronous logger
      Logger.info('Please star or contribute the repository :)');
      Logger.info('https://github.com/ProxityStudios/typescript-starter');

      // Check if the --task flag was passed
      if (task) {
         // Execute the specified task
         await executeTask(task as string);
      } else {
         // Log a message using the asynchronous logger
         Logger.error('This is an asynchronous log message');
      }
   } catch (error: any) {
      // Log the error message
      Logger.error(error.message);
   }
}

async function executeTask(task: string) {
   // Load the tasks configuration from the TASKS_CONFIG environment variable
   const tasksConfig = getEnv('TASKS_CONFIG');

   // Parse the tasks configuration as a JSON object
   Logger.error(tasksConfig)
   const config = JSON.parse(tasksConfig);

   // Check if the specified task is defined in the tasks configuration
   if (!config[task]) {
      throw new Error(
         `Task "${task}" is not defined in the tasks configuration`,
      );
   }

   // Get the task configuration
   const { parallel, tasks } = config[task];
   // Check if the task should be run in parallel
   if (parallel) {
      // Run the tasks in parallel using the async library
      await Promise.all(tasks.map((task) => executeTask(task)));
   } else {
      // Run the tasks sequentially
      for (const task of tasks) {
         await executeTask(task);
      }
   }
}

main();
