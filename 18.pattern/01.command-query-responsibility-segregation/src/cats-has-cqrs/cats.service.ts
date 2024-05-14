import { Injectable } from '@nestjs/common';
import { CreateCatDto } from '../dtos/create-cat-dto.dto';
import { Cat } from '../entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto): Cat {
    const cat = new Cat();
    cat.id = Date.now(); // simplistic approach to generate unique ids
    cat.name = createCatDto.name;
    cat.age = createCatDto.age;
    cat.breed = createCatDto.breed;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}