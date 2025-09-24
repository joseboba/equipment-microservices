import { ICommand } from '@nestjs/cqrs';

export class DeleteEquipmentTypeCommand implements ICommand {
  constructor(public readonly equipmentTypeCode: string) {}
}