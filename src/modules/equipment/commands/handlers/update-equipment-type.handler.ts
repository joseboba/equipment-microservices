import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateEquipmentTypeCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentType } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(UpdateEquipmentTypeCommand)
export class UpdateEquipmentTypeHandler
  implements ICommandHandler<UpdateEquipmentTypeCommand>
{
  constructor(
    @InjectRepository(EquipmentType)
    private readonly repo: Repository<EquipmentType>,
  ) {}

  async execute(command: UpdateEquipmentTypeCommand): Promise<EquipmentType> {
    const entity = await this.repo.findOneBy({
      equipmentTypeCode: command.equipmentTypeCode,
    });

    if (!entity) {
      throw BusinessErrors.EquipmentTypeNotFound(command.equipmentTypeCode);
    }

    Object.assign(entity, command.dto);
    return this.repo.save(entity);
  }
}