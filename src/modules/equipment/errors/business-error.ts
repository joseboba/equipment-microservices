import { BusinessError } from 'incident-management-commons';

export class BusinessErrors {
  public static EquipmentNotFound(equipmentId: number) {
    return new BusinessError('EQUIPMENT.NotFound', 'Equipment not found', {
      equipmentId,
    });
  }

  public static EquipmentSerialNumberAlreadyExists(serialNumber: string) {
    return new BusinessError(
      'EQUIPMENT.SerialNumberAlreadyExists',
      'Equipment serial number already exists',
      { serialNumber },
    );
  }

  public static EquipmentIsInactive(equipmentId: number) {
    return new BusinessError('EQUIPMENT.IsInactive', 'Equipment is inactive', {
      equipmentId,
    });
  }
  public static EquipmentTypeCodeAlreadyExists(equipmentTypeCode: string) {
    return new BusinessError(
      'EQUIPMENT.CodeAlreadyExists',
      'Equipment type code already exists',
      { equipmentTypeCode },
    );
  }

  public static EquipmentTypeNotFound(equipmentTypeCode: string) {
    return new BusinessError('EQUIPMENT.NotFound', 'Equipment type not found', {
      equipmentTypeCode,
    });
  }

  public static EquipmentTypeIsInactive(equipmentTypeCode: string) {
    return new BusinessError(
      'EQUIPMENT.IsInactive',
      'Equipment type is inactive',
      { equipmentTypeCode },
    );
  }

  public static EquipmentLocationNotFound(equipmentLocationId: number) {
    return new BusinessError(
      'EQUIPMENT.NotFound',
      'Equipment location not found',
      { equipmentLocationId },
    );
  }

  public static EquipmentLocationNameAlreadyExists(name: string) {
    return new BusinessError(
      'EQUIPMENT.NameAlreadyExists',
      'Equipment location name already exists',
      { name },
    );
  }

  public static EquipmentLocationIsInactive(equipmentLocationId: number) {
    return new BusinessError(
      'EQUIPMENT.IsInactive',
      'Equipment location is inactive',
      { equipmentLocationId },
    );
  }

  public static UserIsNotActive(userId: number) {
    return new BusinessError('EQUIPMENT.UserIsNotActive', 'User not found', {
      userId,
    });
  }

  public static UserNoUserTechnical(userId: number) {
    return new BusinessError(
      'EQUIPMENT.NoUserTechnical',
      'User is not technical',
      {
        userId,
      },
    );
  }
}
