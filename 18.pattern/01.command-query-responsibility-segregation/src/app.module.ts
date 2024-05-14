import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CatsHasCqrsModule } from './cats-has-cqrs/cats-has-cqrs.module';

@Module({
  imports: [CqrsModule, CatsHasCqrsModule],
})
export class AppModule {}
