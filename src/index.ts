import { startServer } from './server';

process.on('uncaughtException', (error: Error) => {
  console.error('uncaughtException', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason: unknown) => {
  console.error('unhandledRejection', reason);
  process.exit(1);
});

startServer();
