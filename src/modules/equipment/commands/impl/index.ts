import { CreateEquipmentLocationDto, UpdateEquipmentLocationDto, CreateEquipmentDto, UpdateEquipmentDto, CreateEquipmentTypeDto, UpdateEquipmentTypeDto } from '../../dtos';
// Equipment Commands
export class CreateEquipmentCommand {
	constructor(public readonly dto: CreateEquipmentDto) {}
}

export class UpdateEquipmentCommand {
	constructor(
		public readonly equipmentId: number,
		public readonly dto: UpdateEquipmentDto,
	) {}
}

export class DeleteEquipmentCommand {
	constructor(public readonly equipmentId: number) {}
}

export class CreateEquipmentLocationCommand {
	constructor(public readonly dto: CreateEquipmentLocationDto) {}
}

export class UpdateEquipmentLocationCommand {
	constructor(
		public readonly equipmentLocationId: number,
		public readonly dto: UpdateEquipmentLocationDto,
	) {}
}

export class DeleteEquipmentLocationCommand {
	constructor(public readonly equipmentLocationId: number) {}
}

export class CreateEquipmentTypeCommand {
	constructor(public readonly dto: CreateEquipmentTypeDto) {}
}

export class UpdateEquipmentTypeCommand {
	constructor(
		public readonly equipmentTypeCode: string,
		public readonly dto: UpdateEquipmentTypeDto,
	) {}
}

export class DeleteEquipmentTypeCommand {
	constructor(public readonly equipmentTypeCode: string) {}
}
