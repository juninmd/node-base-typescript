import { Request, Response, Router } from 'express';

import healthRouter from './health.route';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    name: 'node-base-typescript',
    version: '2.0.0',
    message: 'Boilerplate TypeScript pronto para produção',
  });
});

router.use(healthRouter);

export default router;
