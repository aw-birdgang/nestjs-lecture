import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';

// Decorator that associates this class with the GetHeroesQuery.
// It marks this class as the handler for processing GetHeroesQuery queries.
@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(
      // Injects the HeroRepository to access hero data.
      private readonly repository: HeroRepository
  ) {}

  // Asynchronously executes the query. This method is invoked when a GetHeroesQuery is issued.
  async execute(query: GetHeroesQuery) {
    // Logs the execution of the query for debugging purposes.
    console.log(clc.yellowBright('Async GetHeroesQuery...'));
    // Calls the findAll method on the repository to retrieve all heroes from the data store.
    return this.repository.findAll();
  }
}
