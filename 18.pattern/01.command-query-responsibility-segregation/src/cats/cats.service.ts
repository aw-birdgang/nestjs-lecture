// cats.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from '../dtos/create-cat-dto.dto';
import { Cat } from '../entities/cat.entity';

@Injectable()
export class CatsService {
    constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}

    async createCat(createCatDto: CreateCatDto): Promise<Cat> {
        const cat = this.catRepository.create(createCatDto);
        return this.catRepository.save(cat);
    }

    async findAllCats(): Promise<Cat[]> {
        return this.catRepository.find();
    }
}
