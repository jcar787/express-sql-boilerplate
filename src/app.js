import express from 'express';
import morgan from 'morgan';
import logger from './lib/logger';
import { router as testRouter } from './resources/test';

const app = express();
logger.debug('Application started');

app.use(morgan('combined'));
app.use('/test', testRouter);

app.get('/', (req, res) => {
  return res.send('Application working');
});

export default app;
