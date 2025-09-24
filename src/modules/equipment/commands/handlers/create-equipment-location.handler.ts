import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEquipmentLocationCommand } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentLocation } from '@entities';
import { Repository } from 'typeorm';
import { GetUserAppByIdAdapterService } from '../../../../infrastructure/microservices-adapters';
import { BusinessErrors } from '../../errors/business-error';

@CommandHandler(CreateEquipmentLocationCommand)
export class CreateEquipmentLocationHandler
  implements ICommandHandler<CreateEquipmentLocationCommand>
{
  constructor(
    @InjectRepository(EquipmentLocation)
    private readonly repo: Repository<EquipmentLocation>,
    private readonly _getUserAppByIdAdapter: GetUserAppByIdAdapterService,
  ) {}

  async execute(
    command: CreateEquipmentLocationCommand,
  ): Promise<EquipmentLocation> {
    if (
      command.dto.assignedUser !== undefined &&
      command.dto.assignedUser !== null
    ) {
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

    const exists = await this.repo.findOneBy({ name: command.dto.name });
    if (exists) {
      throw BusinessErrors.EquipmentLocationNameAlreadyExists(
        command.dto.name,
      );
    }

    const entity = this.repo.create(command.dto);
    return this.repo.save(entity);
  }
}
