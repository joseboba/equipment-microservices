import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateEquipmentCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(UpdateEquipmentCommand)
export class UpdateEquipmentHandler
  implements ICommandHandler<UpdateEquipmentCommand>
{
  constructor(
    @InjectRepository(Equipment)
    private readonly repo: Repository<Equipment>,
  ) {}

  async execute(command: UpdateEquipmentCommand): Promise<Equipment> {
    const entity = await this.repo.findOneBy({
      equipmentId: command.equipmentId,
    });

    if (!entity) throw BusinessErrors.EquipmentNotFound(command.equipmentId);

    Object.assign(entity, command.dto);
    return this.repo.save(entity);
  }
}
