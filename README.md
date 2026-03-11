# Node.js + TypeScript Boilerplate (2026)

Boilerplate moderno para APIs Node.js com foco em qualidade de código, padronização e base pronta para evolução.

## Stack

- Node.js 20+
- TypeScript com `strict: true`
- Express 4
- Dotenv para configuração de ambiente
- Morgan + CORS + Body Parser
- ESLint + Prettier
- Testes com `node:test`

## Como rodar

```bash
yarn install
yarn dev
```

A API sobe por padrão em `http://localhost:3000`.

## Scripts

- `yarn dev`: hot reload local
- `yarn build`: compilação para `dist`
- `yarn start`: execução de produção
- `yarn lint`: análise estática
- `yarn typecheck`: validação de tipos
- `yarn test`: suíte de testes automatizados

## Endpoints padrão

- `GET /api/v1`
- `GET /api/v1/health`

## Variáveis de ambiente

Crie um `.env` na raiz do projeto:

```env
NODE_ENV=development
PORT=3000
APP_NAME=node-base-typescript
```
