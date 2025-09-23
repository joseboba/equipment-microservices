export class GetEquipmentLocationsByAssignedUserQuery {
	constructor(public readonly assignedUser: number) {}
}
export class GetAllEquipmentQuery {}

export class GetEquipmentByIdQuery {
	constructor(public readonly equipmentId: number) {}
}
export class GetAllEquipmentLocationsQuery {}

export class GetEquipmentLocationByIdQuery {
	constructor(public readonly equipmentLocationId: number) {}
}
export class GetAllEquipmentTypesQuery {}

export class GetEquipmentTypeByIdQuery {
	constructor(public readonly equipmentTypeCode: string) {}
}
