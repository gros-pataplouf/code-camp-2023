import { Knex } from 'knex';
import { AppDbService } from './db';
import * as express from 'express';

export class ApiHandlers {
  constructor(private knex: Knex) {}

  async handleListPakete(_req: express.Request, res: express.Response) {
    const pakete = await this.knex.transaction(async (trx) => {
      return new AppDbService(trx).loadPakete();
    });

    res.json(pakete);
  }

  // This call must only have public functions that have exactly the two req and res parameters!
  // private helper functions are allowed!
}
