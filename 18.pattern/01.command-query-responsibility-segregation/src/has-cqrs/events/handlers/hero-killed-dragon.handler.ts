import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';

// This decorator associates the event with its handler.
@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
  // This method handles the HeroKilledDragonEvent when it's published
  handle(event: HeroKilledDragonEvent) {
    // Handling logic here could include updating system state, notifying other parts of the system,
    // or triggering further actions that depend on the dragon being killed.
    console.log(clc.greenBright('HeroKilledDragonEvent...'));
  }
}
