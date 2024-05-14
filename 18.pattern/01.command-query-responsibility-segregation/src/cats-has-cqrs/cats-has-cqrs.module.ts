import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatHandler } from './commands/impl/create-cat.handler';
import { GetCatsHandler } from './queries/impl/get-cats.handler';

@Module({
  providers: [CatsService, CreateCatHandler, GetCatsHandler]
})
export class CatsHasCqrsModule {}