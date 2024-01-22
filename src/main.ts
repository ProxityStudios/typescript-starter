/**
 * If you installed the "TODO Highlighting" extension,
 * you can use the these prefixes:
 *
 * TODO: Something that should be done.
 * BUG: Use this prefix if you write something about the bug.
 * REVIEW: Something that should be reviewed.
 * NOTE: Something that should be noted.
 */

import './lib/env';
import { mainLogger } from './lib/logger';
import { convertNumToStr } from './lib/utils';

function main() {
	try {
		mainLogger.silly('Please star & contribute the repository :)');
		mainLogger.silly('https://github.com/ProxityStudios/typescript-starter');

		// awesome code to here
		mainLogger.info('Number converted to string:', convertNumToStr(100));
	} catch (error) {
		if (error instanceof Error) {
			mainLogger.error(error.message);
		} else {
			mainLogger.error(error);
		}
	}
}

main();
