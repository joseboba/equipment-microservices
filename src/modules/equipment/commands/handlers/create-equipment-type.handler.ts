import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEquipmentTypeCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentType } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(CreateEquipmentTypeCommand)
export class CreateEquipmentTypeHandler
  implements ICommandHandler<CreateEquipmentTypeCommand>
{
  constructor(
    @InjectRepository(EquipmentType)
    private readonly repo: Repository<EquipmentType>,
  ) {}

  async execute(command: CreateEquipmentTypeCommand): Promise<EquipmentType> {
    const exists = await this.repo.findOneBy({
      equipmentTypeCode: command.dto.equipmentTypeCode,
    });

    if (exists) {
      throw BusinessErrors.EquipmentTypeCodeAlreadyExists(
        command.dto.equipmentTypeCode,
      );
    }
    const entity = this.repo.create(command.dto);
    return this.repo.save(entity);
  }
}
