import express from 'express';
import cors from 'cors';
import { Server } from '@overnightjs/core';

export default class App extends Server {
  private server: express.Application;

  constructor() {
    super();
    this.server = this.app;

    this.server.use(cors());
  }

  async start(): Promise<void> {
    this.server.listen(3333, () => {
      console.log('🚀 Server ready at 3333');
    });
  }
}
