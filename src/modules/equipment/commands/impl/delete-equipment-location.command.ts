import { ICommand } from '@nestjs/cqrs';

export class DeleteEquipmentLocationCommand implements ICommand {
  constructor(public readonly equipmentLocationId: number) {}
}