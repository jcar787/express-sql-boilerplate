import { testController } from '../controller';
import logger from '../lib/logger';

export default router => {
  router.get('/test/:id', testController.getTest);
  router.get('/test', testController.getAllTests);
};
