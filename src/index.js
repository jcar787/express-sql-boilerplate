import { server } from './app';
import logger from './lib/logger';

(async () => {
  try {
    logger.info('Server is starting');
    await server.start();
  } catch (e) {
    logger.error(`Error: ${e.message}`);
  }
})();
