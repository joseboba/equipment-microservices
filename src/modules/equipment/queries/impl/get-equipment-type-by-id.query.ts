import { IQuery } from '@nestjs/cqrs';

export class GetEquipmentTypeByIdQuery implements IQuery {
  constructor(public readonly equipmentTypeCode: string) {}
}