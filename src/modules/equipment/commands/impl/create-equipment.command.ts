import { CreateEquipmentDto } from '@dtos';
import { ICommand } from '@nestjs/cqrs';

export class CreateEquipmentCommand implements ICommand {
  constructor(public readonly dto: CreateEquipmentDto) {}
}
