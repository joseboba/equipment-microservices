import { CreateEquipmentLocationDto } from '@dtos';
import { ICommand } from '@nestjs/cqrs';

export class CreateEquipmentLocationCommand implements ICommand {
  constructor(public readonly dto: CreateEquipmentLocationDto) {}
}