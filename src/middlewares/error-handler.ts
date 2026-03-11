import { NextFunction, Request, Response } from 'express';

export function notFoundHandler(_req: Request, res: Response): void {
  res.status(404).json({ message: 'Rota não encontrada' });
}

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  res.status(500).json({
    message: 'Erro interno no servidor',
    details: process.env.NODE_ENV === 'production' ? undefined : error.message,
  });
}
