import { Logger } from 'tslog';

export const mainLogger = new Logger({ type: 'pretty', name: 'Main' });
export const envLogger = new Logger({ type: 'pretty', name: 'Environment' });
