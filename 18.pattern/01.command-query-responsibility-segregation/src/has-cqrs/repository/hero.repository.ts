import { Injectable } from '@nestjs/common';
import { userHero, userHero1, userHero2 } from './fixtures/user';
import { Hero } from '../model/hero.model';

@Injectable()
export class HeroRepository {
  async findOneById(id: number): Promise<Hero> {
    return userHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero, userHero1, userHero2];
  }


  async create(id: string): Promise<Hero> {
    const hero = new Hero(id);
    return hero;
  }


}