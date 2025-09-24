import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteEquipmentLocationCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentLocation } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(DeleteEquipmentLocationCommand)
export class DeleteEquipmentLocationHandler
  implements ICommandHandler<DeleteEquipmentLocationCommand>
{
  constructor(
    @InjectRepository(EquipmentLocation)
    private readonly repo: Repository<EquipmentLocation>,
  ) {}

  async execute(command: DeleteEquipmentLocationCommand): Promise<void> {
    const entity = await this.repo.findOneBy({
      equipmentLocationId: command.equipmentLocationId,
    });

    if (!entity) {
      throw BusinessErrors.EquipmentLocationNotFound(
        command.equipmentLocationId,
      );
    }

    await this.repo.delete({
      equipmentLocationId: command.equipmentLocationId,
    });
  }
}