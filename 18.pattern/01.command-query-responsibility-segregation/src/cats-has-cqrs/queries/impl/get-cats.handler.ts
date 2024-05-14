import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Cat } from '../../../entities/cat.entity';
import { GetCatsQuery } from '../get-cats.query';
import { CatsService } from '../../cats.service';

@QueryHandler(GetCatsQuery)
export class GetCatsHandler implements IQueryHandler<GetCatsQuery> {
  constructor(private readonly catsService: CatsService) {}

  async execute(query: GetCatsQuery): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}