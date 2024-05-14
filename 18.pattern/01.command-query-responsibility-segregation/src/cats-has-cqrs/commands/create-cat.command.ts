import { CreateCatDto } from '../../dtos/create-cat-dto.dto';

export class CreateCatCommand {
  constructor(public readonly createCatDto: CreateCatDto) {}
}