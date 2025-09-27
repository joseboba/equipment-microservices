import { CreateEquipmentTypeDto } from '@dtos';
import { ICommand } from '@nestjs/cqrs';

export class CreateEquipmentTypeCommand implements ICommand {
  constructor(public readonly dto: CreateEquipmentTypeDto) {}
}