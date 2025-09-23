import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'equipment', schema: 'e_equipment' })
export class Equipment {
	@PrimaryGeneratedColumn({ name: 'equipment_id', type: 'integer' })
	equipmentId: number;

	@Column({ name: 'name', type: 'varchar', length: 25 })
	name: string;

	@Column({ name: 'equipment_type_code', type: 'varchar', length: 10 })
	equipmentTypeCode: string;

	@Column({ name: 'brand', type: 'varchar', length: 35, nullable: true })
	brand?: string;

	@Column({ name: 'color', type: 'varchar', length: 20, nullable: true })
	color?: string;

	@Column({ name: 'serial_number', type: 'varchar', length: 50, nullable: true })
	serialNumber?: string;

	@Column({ name: 'model', type: 'varchar', length: 25, nullable: true })
	model?: string;

	@Column({ name: 'equipment_location_id', type: 'integer' })
	equipmentLocationId: number;

	@Column({ name: 'warranty_expired_date', type: 'timestamp', nullable: true })
	warrantyExpiredDate?: Date;

	@Column({ name: 'is_warranty_expired', type: 'boolean', nullable: true })
	isWarrantyExpired?: boolean;

	@Column({ name: 'is_active', type: 'boolean', default: true })
	isActive: boolean;
}

@Entity({ name: 'equipment_location', schema: 'e_equipment' })
export class EquipmentLocation {
	@PrimaryGeneratedColumn({ name: 'equipment_location_id', type: 'integer' })
	equipmentLocationId: number;

	@Column({ name: 'name', type: 'varchar', length: 50 })
	name: string;

	@Column({ name: 'assigned_user', type: 'integer', nullable: true })
	assignedUser?: number;

	@Column({ name: 'is_high_school', type: 'boolean' })
	isHighSchool: boolean;

	@Column({ name: 'is_administrative', type: 'boolean' })
	isAdministrative: boolean;

	@Column({ name: 'room_code', type: 'varchar', length: 10 })
	roomCode: string;

	@Column({ name: 'floor', type: 'char', length: 1 })
	floor: string;

	@Column({ name: 'is_active', type: 'boolean', default: true })
	isActive: boolean;
}

@Entity({ name: 'equipment_type', schema: 'e_equipment' })
export class EquipmentType {
	@PrimaryColumn({ name: 'equipment_type_code', type: 'varchar', length: 10 })
	equipmentTypeCode: string;

	@Column({ name: 'name', type: 'varchar', length: 25 })
	name: string;

	@Column({ name: 'description', type: 'varchar', length: 50 })
	description: string;

	@Column({ name: 'is_active', type: 'boolean', default: true })
	isActive: boolean;
}
