import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllEquipmentLocationsQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentLocation } from '@entities';
import { Repository } from 'typeorm';

@QueryHandler(GetAllEquipmentLocationsQuery)
export class GetAllEquipmentLocationsHandler
  implements IQueryHandler<GetAllEquipmentLocationsQuery>
{
  constructor(
    @InjectRepository(EquipmentLocation)
    private readonly repo: Repository<EquipmentLocation>,
  ) {}

  async execute(): Promise<EquipmentLocation[]> {
    return this.repo.find();
  }
}