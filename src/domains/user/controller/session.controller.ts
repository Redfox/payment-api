import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';

@Controller('user')
export class SessionController {
  @Get('/')
  index(_: Response, res: Response): Response {
    return res.json({
      dale: 'dole',
    });
  }

  @Post('session')
  store(_: Request, res: Response): Response {
    return res.json({
      dale: 'dole',
    });
  }
}
