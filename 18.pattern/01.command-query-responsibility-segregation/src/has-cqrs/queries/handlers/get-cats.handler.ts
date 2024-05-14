// import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
// import { Cat } from '../../../entities/cat.entity';
// import { GetCatsQuery } from '../impl/get-cats.query';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
//
// @QueryHandler(GetCatsQuery)
// export class GetCatsHandler implements IQueryHandler<GetCatsQuery> {
//   constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
//
//   async execute(query: GetCatsQuery): Promise<Cat[]> {
//     return this.catRepository.find();
//   }
// }