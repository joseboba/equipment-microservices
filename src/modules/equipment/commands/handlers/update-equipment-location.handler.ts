import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateEquipmentLocationCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentLocation } from '@entities';
import { Repository } from 'typeorm';
import { BusinessErrors } from '../../errors/business-error';
import { GetUserAppByIdAdapterService } from '../../../../infrastructure/microservices-adapters';

@CommandHandler(UpdateEquipmentLocationCommand)
export class UpdateEquipmentLocationHandler
  implements ICommandHandler<UpdateEquipmentLocationCommand>
{
  constructor(
    @InjectRepository(EquipmentLocation)
    private readonly repo: Repository<EquipmentLocation>,
    private readonly _getUserAppByIdAdapter: GetUserAppByIdAdapterService,
  ) {}

  async execute(
    command: UpdateEquipmentLocationCommand,
  ): Promise<EquipmentLocation> {
    if (command.dto.assignedUser !== undefined) {
      const userAppResult = await this._getUserAppByIdAdapter.execute(
        command.dto.assignedUser,
      );
      if (!userAppResult.isActive) {
        throw BusinessErrors.UserIsNotActive(userAppResult.userAppId);
      }

      if (!userAppResult.userType.isTechnical) {
        throw BusinessErrors.UserNoUserTechnical(userAppResult.userAppId);
      }
    }


    const entity = await this.repo.findOneBy({
      equipmentLocationId: command.equipmentLocationId,
    });

    if (!entity) {
      throw BusinessErrors.EquipmentLocationNotFound(
        command.equipmentLocationId,
      );
    }

    Object.assign(entity, command.dto);
    return this.repo.save(entity);
  }
}
