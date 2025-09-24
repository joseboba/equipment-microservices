import { GetAllEquipmentHandler } from './get-all-equipment.handler';
import { GetEquipmentByIdHandler } from './get-equipment-by-id.handler';
import { GetAllEquipmentLocationsHandler } from './get-all-equipment-location.handler';
import { GetEquipmentLocationByIdHandler } from './get-equipment-location-by-id.handler';
import { GetAllEquipmentTypesHandler } from './get-all-equipment-types.handler';
import { GetEquipmentTypeByIdHandler } from './get-equipment-type-by-id.handler';

export const QueryHandlers = [
  GetAllEquipmentHandler,
  GetEquipmentByIdHandler,
  GetAllEquipmentLocationsHandler,
  GetEquipmentLocationByIdHandler,
  GetAllEquipmentTypesHandler,
  GetEquipmentTypeByIdHandler,
];
