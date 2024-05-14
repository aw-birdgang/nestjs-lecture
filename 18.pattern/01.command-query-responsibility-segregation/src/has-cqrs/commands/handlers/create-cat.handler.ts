// import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
// import { CreateCatCommand } from '../impl/create-cat.command';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Cat } from '../../../entities/cat.entity';
// import { Repository } from 'typeorm';
//
// @CommandHandler(CreateCatCommand)
// export class CreateCatHandler implements ICommandHandler<CreateCatCommand> {
//   constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
//
//   async execute(command: CreateCatCommand): Promise<void> {
//     const { createCatDto } = command;
//     const cat = this.catRepository.create(createCatDto);
//     await this.catRepository.save(cat);
//   }
// }