import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from '@entities';
import { Repository } from 'typeorm';
import { GetAllEquipmentQuery } from '../impl/get-all-equipment.query';

@QueryHandler(GetAllEquipmentQuery)
export class GetAllEquipmentHandler
  implements IQueryHandler<GetAllEquipmentQuery>
{
  constructor(
    @InjectRepository(Equipment)
    private readonly repo: Repository<Equipment>,
  ) {}

  async execute(): Promise<Equipment[]> {
    return this.repo.find();
  }
}
