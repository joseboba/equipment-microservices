import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteEquipmentCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(DeleteEquipmentCommand)
export class DeleteEquipmentHandler
  implements ICommandHandler<DeleteEquipmentCommand>
{
  constructor(
    @InjectRepository(Equipment)
    private readonly repo: Repository<Equipment>,
  ) {}

  async execute(command: DeleteEquipmentCommand): Promise<void> {
    const entity = await this.repo.findOneBy({
      equipmentId: command.equipmentId,
    });
    if (!entity) throw BusinessErrors.EquipmentNotFound(command.equipmentId);
    await this.repo.delete({ equipmentId: command.equipmentId });
  }
}