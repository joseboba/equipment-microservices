	import { BusinessError } from 'incident-management-commons';

	export class BusinessErrors {
		// EquipmentLocation errors
	// Equipment errors
	public static EquipmentNotFound(equipmentId: number) {
		return new BusinessError(
			'EQUIPMENT.NotFound',
			'Equipment not found',
			{ equipmentId },
		);
	}

	public static EquipmentSerialNumberAlreadyExists(serialNumber: string) {
		return new BusinessError(
			'EQUIPMENT.SerialNumberAlreadyExists',
			'Equipment serial number already exists',
			{ serialNumber },
		);
	}

	public static EquipmentIsInactive(equipmentId: number) {
		return new BusinessError(
			'EQUIPMENT.IsInactive',
			'Equipment is inactive',
			{ equipmentId },
		);
	}
	public static EquipmentTypeCodeAlreadyExists(equipmentTypeCode: string) {
		return new BusinessError(
			'EQUIPMENT_TYPE.CodeAlreadyExists',
			'Equipment type code already exists',
			{ equipmentTypeCode },
		);
	}

	public static EquipmentTypeNotFound(equipmentTypeCode: string) {
		return new BusinessError(
			'EQUIPMENT_TYPE.NotFound',
			'Equipment type not found',
			{ equipmentTypeCode },
		);
	}

	public static EquipmentTypeIsInactive(equipmentTypeCode: string) {
		return new BusinessError(
			'EQUIPMENT_TYPE.IsInactive',
			'Equipment type is inactive',
			{ equipmentTypeCode },
		);
	}
	// EquipmentLocation errors
	public static EquipmentLocationNotFound(equipmentLocationId: number) {
		return new BusinessError(
			'EQUIPMENT_LOCATION.NotFound',
			'Equipment location not found',
			{ equipmentLocationId },
		);
	}

	public static EquipmentLocationNameAlreadyExists(name: string) {
		return new BusinessError(
			'EQUIPMENT_LOCATION.NameAlreadyExists',
			'Equipment location name already exists',
			{ name },
		);
	}

	public static EquipmentLocationIsInactive(equipmentLocationId: number) {
		return new BusinessError(
			'EQUIPMENT_LOCATION.IsInactive',
			'Equipment location is inactive',
			{ equipmentLocationId },
		);
	}
	// User errors
	public static UserNotFound(userId: number) {
		return new BusinessError(
			'USER.NotFound',
			'User not found',
			{ userId },
		);
	}

	public static UserNoUserTechnical(userId: number) {
		return new BusinessError(
			'USER.NoUserTechnical',
			'User is not technical',
			{ userId },
		);
	}
}
