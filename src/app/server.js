import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from '../lib/logger';
import routes from './routes';

class Server {
  constructor() {
    this._started = false;
    this.PORT = process.env.port || 8080;
    logger.debug(`Environment: ${process.env.NODE_ENV}`);
  }

  _initApp() {
    this._app = express();
    const rootRouter = express.Router();
    routes(rootRouter);

    // Init middleware
    this._app.use(morgan('combined'));
    this._app.use(bodyParser.json());
    this._app.use('/', rootRouter);
    logger.info('Finished initApp');
  }

  _startServer() {
    logger.info('Getting into startServer');
    return new Promise(resolve => {
      this._app.listen(this.PORT, () => {
        logger.info(`Http server running on port ${this.PORT}`);
        resolve();
      });
    });
  }

  async start() {
    if (!this._started) {
      this._initApp();
      await this._startServer();
      this._started = true;
    }
  }
}

export default new Server();
