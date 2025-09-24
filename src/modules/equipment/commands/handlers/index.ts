import { CreateEquipmentTypeHandler } from './create-equipment-type.handler';
import { DeleteEquipmentLocationHandler } from './delete-equipment-location.handler';
import { UpdateEquipmentLocationHandler } from './update-equipment-location.handler';
import { CreateEquipmentLocationHandler } from './create-equipment-location.handler';
import { DeleteEquipmentTypeHandler } from './delete-equipment-type.handler';
import { CreateEquipmentHandler } from './create-equipment.handler';
import { UpdateEquipmentHandler } from './update-equipment.handler';
import { DeleteEquipmentHandler } from './delete-equipment.handler';
import { UpdateEquipmentTypeHandler } from './update-equipment-type.handler';

export const CommandHandlers = [
  CreateEquipmentHandler,
  UpdateEquipmentHandler,
  DeleteEquipmentHandler,
  CreateEquipmentTypeHandler,
  UpdateEquipmentTypeHandler,
  DeleteEquipmentTypeHandler,
  CreateEquipmentLocationHandler,
  UpdateEquipmentLocationHandler,
  DeleteEquipmentLocationHandler,
];
