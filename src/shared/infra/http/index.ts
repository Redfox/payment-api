import 'dotenv/config';
import express from 'express';
import bodyparse from 'body-parser';
import cors from 'cors';
import logger from 'shared/providers/logger';
import { Server } from '@overnightjs/core';
import { controllers } from './controllers';

class App extends Server {
  private server: express.Application;

  constructor() {
    super();
    this.server = this.app;

    this.server.use(cors());
    this.server.use(bodyparse.json());
    this.setupControllers();
  }

  async start(): Promise<void> {
    const port = process.env.PORT || 3333;

    this.server.listen(port, () => {
      logger('main', `🚀 Server ready at ${port}`, 'info');
    });
  }

  private setupControllers(): void {
    this.addControllers(controllers);
  }
}

export default new App().start();
