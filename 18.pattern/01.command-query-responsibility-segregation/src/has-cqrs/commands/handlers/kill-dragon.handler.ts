import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';

// This decorator associates the command with its handler.
@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
      private readonly repository: HeroRepository, // Injects the hero repository to access hero data
      private readonly publisher: EventPublisher, // Injects the event publisher for handling domain events
  ) {}

  // This method executes the logic when the KillDragonCommand is triggered
  async execute(command: KillDragonCommand) {
    const { heroId, dragonId } = command; // Destructures command to get hero and dragon IDs
    // Retrieves hero entity and merges it into the current context for event handling
    const hero = this.publisher.mergeObjectContext(
        await this.repository.findOneById(+heroId), // Converts heroId from string to number and fetches hero
    );
    hero.killEnemy(dragonId); // Calls the method to simulate killing the dragon
    hero.commit(); // Commits all pending events triggered during the killEnemy method
  }
}
