import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllEquipmentTypesQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentType } from '@entities';
import { Repository } from 'typeorm';

@QueryHandler(GetAllEquipmentTypesQuery)
export class GetAllEquipmentTypesHandler
  implements IQueryHandler<GetAllEquipmentTypesQuery>
{
  constructor(
    @InjectRepository(EquipmentType)
    private readonly repo: Repository<EquipmentType>,
  ) {}

  async execute(): Promise<EquipmentType[]> {
    return this.repo.find();
  }
}