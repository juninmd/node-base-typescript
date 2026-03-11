import { config } from 'dotenv';

config();

type NodeEnv = 'development' | 'test' | 'production';

function getNodeEnv(): NodeEnv {
  const nodeEnv = process.env.NODE_ENV;
  if (
    nodeEnv === 'development' ||
    nodeEnv === 'test' ||
    nodeEnv === 'production'
  ) {
    return nodeEnv;
  }
  return 'development';
}

function getPort(): number {
  const rawPort = process.env.PORT ?? '3000';
  const port = Number(rawPort);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`PORT inválida: ${rawPort}`);
  }

  return port;
}

export const env = {
  nodeEnv: getNodeEnv(),
  port: getPort(),
  appName: process.env.APP_NAME ?? 'node-base-typescript',
};
