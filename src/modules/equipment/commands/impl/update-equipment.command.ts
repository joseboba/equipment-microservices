import { UpdateEquipmentDto } from '@dtos';
import { ICommand } from '@nestjs/cqrs';

export class UpdateEquipmentCommand implements ICommand {
  constructor(
    public readonly equipmentId: number,
    public readonly dto: UpdateEquipmentDto,
  ) {}
}