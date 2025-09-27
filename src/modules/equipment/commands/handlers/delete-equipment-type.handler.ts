import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteEquipmentTypeCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentType } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(DeleteEquipmentTypeCommand)
export class DeleteEquipmentTypeHandler
  implements ICommandHandler<DeleteEquipmentTypeCommand>
{
  constructor(
    @InjectRepository(EquipmentType)
    private readonly repo: Repository<EquipmentType>,
  ) {}

  async execute(command: DeleteEquipmentTypeCommand): Promise<void> {
    const entity = await this.repo.findOneBy({
      equipmentTypeCode: command.equipmentTypeCode,
    });

    if (!entity) {
      throw BusinessErrors.EquipmentTypeNotFound(command.equipmentTypeCode);
    }
    await this.repo.delete({ equipmentTypeCode: command.equipmentTypeCode });
  }
}
