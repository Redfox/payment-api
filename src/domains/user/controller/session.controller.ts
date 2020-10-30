import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';
import { container } from 'tsyringe';
import { SessionService } from '@domains/user/services/session.service';

@Controller('user')
export class SessionController {
  @Get('/')
  index(_: Response, res: Response): Response {
    const service = container.resolve(SessionService);

    const token = service.execute();

    return res.json({
      token,
    });
  }

  @Post('session')
  store(_: Request, res: Response): Response {
    return res.json({
      dale: 'dole',
    });
  }
}
