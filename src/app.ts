import bodyParser from 'body-parser';
import express, { Express } from 'express';

import { errorHandler, notFoundHandler } from './middlewares/error-handler';
import apiRoutes from './routes';

const cors: () => express.RequestHandler = require('cors');
const morgan: (
  format: string,
  options: { stream: { write: (message: string) => void } },
) => express.RequestHandler = require('morgan');

export function createApp(): Express {
  const app = express();

  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms', {
      stream: { write: (message: string) => process.stdout.write(message) },
    }),
  );

  app.use('/api/v1', apiRoutes);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
