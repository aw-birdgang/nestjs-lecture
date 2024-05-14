import { Module } from '@nestjs/common';
import { HeroesGameModule } from './has-cqrs/heroes.module';

@Module({
  imports: [
    HeroesGameModule
  ],
})
export class AppModule {}
