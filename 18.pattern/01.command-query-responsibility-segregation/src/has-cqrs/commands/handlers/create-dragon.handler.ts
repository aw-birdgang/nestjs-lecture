import {CommandHandler, EventPublisher, ICommandHandler} from '@nestjs/cqrs';
import * as clc from 'cli-color';
import {HeroRepository} from '../../repository/hero.repository';
import {KillDragonCommand} from '../impl/kill-dragon.command';
import {CreateDragonCommand} from '../impl/create-dragon.command';

@CommandHandler(CreateDragonCommand)
export class CreateDragonHandler implements ICommandHandler<CreateDragonCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    console.log(clc.greenBright('CreateDragonCommand...'));

    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.create(dragonId),
    );
    hero.addItem(dragonId);
    hero.commit();
  }
}
