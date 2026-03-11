import { Server } from 'http';

import { createApp } from './app';
import { env } from './config/env';

export function startServer(): Server {
  const app = createApp();
  const server = app.listen(env.port, () => {
    console.log(
      `[${env.appName}] rodando na porta ${env.port} (${env.nodeEnv})`,
    );
  });

  const gracefulShutdown = (signal: string): void => {
    console.log(`Recebido ${signal}. Encerrando aplicação...`);
    server.close((error?: Error) => {
      if (error) {
        console.error('Erro ao encerrar servidor', error);
        process.exit(1);
      }
      process.exit(0);
    });
  };

  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

  return server;
}
