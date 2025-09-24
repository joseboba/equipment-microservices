import { IQuery } from '@nestjs/cqrs';

export class GetEquipmentLocationByIdQuery implements IQuery {
  constructor(public readonly equipmentLocationId: number) {}
}