import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';
import { container } from 'tsyringe';
import { SessionService } from '@domains/user/services/session.service';

@Controller('user')
export class SessionController {
  @Get('/')
  async index(_: Response, res: Response): Promise<void> {
    const service = container.resolve(SessionService);

    const qrCode = await service.execute();

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': qrCode.length,
    });

    res.end(qrCode);
  }

  @Post('session')
  store(_: Request, res: Response): Response {
    return res.json({
      dale: 'dole',
    });
  }
}
