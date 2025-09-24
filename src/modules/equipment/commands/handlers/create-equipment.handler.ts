import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEquipmentCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment, EquipmentLocation } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(CreateEquipmentCommand)
export class CreateEquipmentHandler
  implements ICommandHandler<CreateEquipmentCommand>
{
  constructor(
    @InjectRepository(Equipment)
    private readonly repo: Repository<Equipment>,
    @InjectRepository(EquipmentLocation)
    private readonly locationRepo: Repository<EquipmentLocation>,
  ) {}

  async execute(command: CreateEquipmentCommand): Promise<Equipment> {
    const location = await this.locationRepo.findOneBy({
      equipmentLocationId: command.dto.equipmentLocationId,
    });

    if (!location) {
      throw BusinessErrors.EquipmentLocationNotFound(
        command.dto.equipmentLocationId,
      );
    }

    const exists = await this.repo.findOneBy({
      serialNumber: command.dto.serialNumber,
    });

    if (exists) {
      throw BusinessErrors.EquipmentSerialNumberAlreadyExists(
        command.dto.serialNumber,
      );
    }

    const entity = this.repo.create(command.dto);
    return this.repo.save(entity);
  }
}
