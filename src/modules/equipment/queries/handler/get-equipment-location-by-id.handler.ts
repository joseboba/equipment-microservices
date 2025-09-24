import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEquipmentLocationByIdQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentLocation } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@QueryHandler(GetEquipmentLocationByIdQuery)
export class GetEquipmentLocationByIdHandler
  implements IQueryHandler<GetEquipmentLocationByIdQuery>
{
  constructor(
    @InjectRepository(EquipmentLocation)
    private readonly repo: Repository<EquipmentLocation>,
  ) {}

  async execute(
    query: GetEquipmentLocationByIdQuery,
  ): Promise<EquipmentLocation> {
    const entity = await this.repo.findOneBy({
      equipmentLocationId: query.equipmentLocationId,
    });
    if (!entity)
      throw BusinessErrors.EquipmentLocationNotFound(query.equipmentLocationId);
    return entity;
  }
}