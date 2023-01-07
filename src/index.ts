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
*/
import './services/env';
import { Logger } from './services/logger';

Logger.info('Please star or contribute my repository :)');
Logger.info('https://github.com/slaylocal/typescript-starter');
*/

// new code.
import './services/env';
import { Logger, logMessageAsync } from './services/logger';
import { getEnv, getEnvAsBool } from './services/env';
import { parse } from 'yargs';

// Parse command-line arguments using yargs
const { task } = parse();

async function main() {
  try {
    // Log a message using the synchronous logger
    Logger.info('Please star or contribute my repository :)');
    Logger.info('https://github.com/slaylocal/typescript-starter');

    // Check if the --task flag was passed
    if (task) {
      // Execute the specified task
      await executeTask(task);
    } else {
      // Log a message using the asynchronous logger
      await logMessageAsync('This is an asynchronous log message');
    }
  } catch (error) {
    // Log the error message
    Logger.error(error.message);
  }
}

async function executeTask(task: string) {
  // Load the tasks configuration from the TASKS_CONFIG environment variable
  const tasksConfig = getEnv('TASKS_CONFIG');

  // Parse the tasks configuration as a JSON object
  const config = JSON.parse(tasksConfig);

  // Check if the specified task is defined in the tasks configuration
  if (!config[task]) {
    throw new Error(`Task "${task}" is not defined in the tasks configuration`);
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
  
 
