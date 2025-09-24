import { ICommand } from '@nestjs/cqrs';

export class DeleteEquipmentCommand implements ICommand {
  constructor(public readonly equipmentId: number) {}
}