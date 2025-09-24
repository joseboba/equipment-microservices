import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEquipmentTypeByIdQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentType } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@QueryHandler(GetEquipmentTypeByIdQuery)
export class GetEquipmentTypeByIdHandler
  implements IQueryHandler<GetEquipmentTypeByIdQuery>
{
  constructor(
    @InjectRepository(EquipmentType)
    private readonly repo: Repository<EquipmentType>,
  ) {}

  async execute(query: GetEquipmentTypeByIdQuery): Promise<EquipmentType> {
    const entity = await this.repo.findOneBy({
      equipmentTypeCode: query.equipmentTypeCode,
    });
    if (!entity)
      throw BusinessErrors.EquipmentTypeNotFound(query.equipmentTypeCode);
    return entity;
  }
}
