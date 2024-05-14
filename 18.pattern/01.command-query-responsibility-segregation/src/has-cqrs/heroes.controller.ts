import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { GetHeroesQuery } from './queries/impl';
import { Hero } from './model/hero.model';
import { DropAncientItemCommand } from './commands/impl/drop-ancient-item.command';
import { DropDragonDto } from './interfaces/drop-dragon-dto.interface';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  @Post(':id/drop')
  async dropDragon(@Param('id') id: string, @Body() dto: DropDragonDto) {
    return this.commandBus.execute(new DropAncientItemCommand(id, dto.dragonId));
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}