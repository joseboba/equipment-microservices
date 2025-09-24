import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEquipmentByIdQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@QueryHandler(GetEquipmentByIdQuery)
export class GetEquipmentByIdHandler
  implements IQueryHandler<GetEquipmentByIdQuery>
{
  constructor(
    @InjectRepository(Equipment)
    private readonly repo: Repository<Equipment>,
  ) {}

  async execute(query: GetEquipmentByIdQuery): Promise<Equipment> {
    const entity = await this.repo.findOneBy({
      equipmentId: query.equipmentId,
    });
    if (!entity) throw BusinessErrors.EquipmentNotFound(query.equipmentId);
    return entity;
  }
}