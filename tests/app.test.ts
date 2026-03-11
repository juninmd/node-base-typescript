import { once } from 'events';
import { request } from 'http';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { createApp } from '../src/app';

function httpGet(
  path: string,
  port: number,
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = request({ method: 'GET', port, path }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({ status: res.statusCode ?? 0, body: data });
      });
    });

    req.on('error', reject);
    req.end();
  });
}

test('GET /api/v1 retorna metadados da API', async () => {
  const app = createApp();
  const server = app.listen(0);
  await once(server, 'listening');
  const port = (server.address() as { port: number }).port;

  const response = await httpGet('/api/v1', port);
  const body = JSON.parse(response.body) as { message: string };

  assert.equal(response.status, 200);
  assert.match(body.message, /Boilerplate/);
  server.close();
});

test('GET /api/v1/health retorna status ok', async () => {
  const app = createApp();
  const server = app.listen(0);
  await once(server, 'listening');
  const port = (server.address() as { port: number }).port;

  const response = await httpGet('/api/v1/health', port);
  const body = JSON.parse(response.body) as { status: string };

  assert.equal(response.status, 200);
  assert.equal(body.status, 'ok');
  server.close();
});
