import { UpdateEquipmentLocationDto } from '@dtos';
import { ICommand } from '@nestjs/cqrs';

export class UpdateEquipmentLocationCommand implements ICommand {
  constructor(
    public readonly equipmentLocationId: number,
    public readonly dto: UpdateEquipmentLocationDto,
  ) {}
}