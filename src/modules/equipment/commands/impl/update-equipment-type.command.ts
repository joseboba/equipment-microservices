import { UpdateEquipmentTypeDto } from '@dtos';
import { ICommand } from '@nestjs/cqrs';

export class UpdateEquipmentTypeCommand implements ICommand {
  constructor(
    public readonly equipmentTypeCode: string,
    public readonly dto: UpdateEquipmentTypeDto,
  ) {}
}