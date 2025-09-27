import { IQuery } from '@nestjs/cqrs';

export class GetEquipmentByIdQuery implements IQuery {
  constructor(public readonly equipmentId: number) {}
}