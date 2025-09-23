import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsDateString, IsBoolean, IsNotEmpty, IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreateEquipmentDto {
	@ApiProperty({ example: 'Laptop HP', description: 'Nombre del equipo' })
	@IsString()
	@Length(1, 25)
	@IsNotEmpty()
	name: string;

	@ApiProperty({ example: 'LAPTOP', description: 'Código del tipo de equipo' })
	@IsString()
	@Length(1, 10)
	@IsNotEmpty()
	equipmentTypeCode: string;

	@ApiProperty({ example: 'HP', description: 'Marca del equipo' })
	@IsString()
	@Length(1, 35)
	@IsNotEmpty()
	brand: string;

	@ApiPropertyOptional({ example: 'Negro', description: 'Color del equipo' })
	@IsString()
	@Length(1, 20)
	@IsOptional()
	color?: string;

	@ApiProperty({ example: 'SN123456', description: 'Número de serie' })
	@IsString()
	@Length(1, 50)
	@IsNotEmpty()
	serialNumber: string;

	@ApiPropertyOptional({ example: 'EliteBook', description: 'Modelo del equipo' })
	@IsString()
	@Length(1, 25)
	@IsOptional()
	model?: string;

	@ApiProperty({ example: 1, description: 'ID de la ubicación del equipo' })
	@IsInt()
	@IsNotEmpty()
	equipmentLocationId: number;

	@ApiProperty({ example: '2025-12-31T00:00:00.000Z', description: 'Fecha de expiración de la garantía' })
	@IsDateString()
	@IsNotEmpty()
	warrantyExpiredDate: Date;

	@ApiPropertyOptional({ example: false, description: '¿La garantía está expirada?' })
	@IsBoolean()
	@IsOptional()
	isWarrantyExpired?: boolean;

	@ApiPropertyOptional({ example: true, description: '¿Está activo el equipo?' })
	@IsBoolean()
	@IsOptional()
	isActive?: boolean = true;
}

export class UpdateEquipmentDto {
	@ApiPropertyOptional({ example: 'Laptop HP', description: 'Nombre del equipo' })
	@IsString()
	@Length(1, 25)
	@IsOptional()
	name?: string;

	@ApiPropertyOptional({ example: 'LAPTOP', description: 'Código del tipo de equipo' })
	@IsString()
	@Length(1, 10)
	@IsOptional()
	equipmentTypeCode?: string;

	@ApiPropertyOptional({ example: 'HP', description: 'Marca del equipo' })
	@IsString()
	@Length(1, 35)
	@IsOptional()
	brand?: string;

	@ApiPropertyOptional({ example: 'Negro', description: 'Color del equipo' })
	@IsString()
	@Length(1, 20)
	@IsOptional()
	color?: string;

	@ApiPropertyOptional({ example: 'SN123456', description: 'Número de serie' })
	@IsString()
	@Length(1, 50)
	@IsOptional()
	serialNumber?: string;

	@ApiPropertyOptional({ example: 'EliteBook', description: 'Modelo del equipo' })
	@IsString()
	@Length(1, 25)
	@IsOptional()
	model?: string;

	@ApiPropertyOptional({ example: 1, description: 'ID de la ubicación del equipo' })
	@IsInt()
	@IsOptional()
	equipmentLocationId?: number;

	@ApiPropertyOptional({ example: '2025-12-31T00:00:00.000Z', description: 'Fecha de expiración de la garantía' })
	@IsDateString()
	@IsOptional()
	warrantyExpiredDate?: Date;

	@ApiPropertyOptional({ example: false, description: '¿La garantía está expirada?' })
	@IsBoolean()
	@IsOptional()
	isWarrantyExpired?: boolean;

	@ApiPropertyOptional({ example: true, description: '¿Está activo el equipo?' })
	@IsBoolean()
	@IsOptional()
	isActive?: boolean;
}

export class EquipmentResponseDto {
	@ApiProperty({ example: 1, description: 'ID del equipo' })
	equipmentId: number;

	@ApiProperty({ example: 'Laptop HP', description: 'Nombre del equipo' })
	name: string;

	@ApiProperty({ example: 'LAPTOP', description: 'Código del tipo de equipo' })
	equipmentTypeCode: string;

	@ApiProperty({ example: 'HP', description: 'Marca del equipo' })
	brand: string;

	@ApiProperty({ example: 'Negro', description: 'Color del equipo' })
	color?: string;

	@ApiProperty({ example: 'SN123456', description: 'Número de serie' })
	serialNumber: string;

	@ApiProperty({ example: 'EliteBook', description: 'Modelo del equipo' })
	model?: string;

	@ApiProperty({ example: 1, description: 'ID de la ubicación del equipo' })
	equipmentLocationId: number;

	@ApiProperty({ example: '2025-12-31T00:00:00.000Z', description: 'Fecha de expiración de la garantía' })
	warrantyExpiredDate: Date;

	@ApiProperty({ example: false, description: '¿La garantía está expirada?' })
	isWarrantyExpired?: boolean;

	@ApiProperty({ example: true, description: '¿Está activo el equipo?' })
	isActive: boolean;
}
export class CreateEquipmentLocationDto {
	@ApiProperty({ example: 'Laboratorio 1', description: 'Nombre de la ubicación' })
	@IsString()
	@Length(1, 50)
	@IsNotEmpty()
	name: string;

	@ApiProperty({ example: 3, description: 'ID del usuario asignado' })
	@IsNotEmpty()
	assignedUser: number;

	@ApiProperty({ example: true, description: '¿Es de secundaria?' })
	@IsBoolean()
	isHighSchool: boolean;

	@ApiProperty({ example: false, description: '¿Es administrativa?' })
	@IsBoolean()
	isAdministrative: boolean;

	@ApiProperty({ example: 'A101', description: 'Código del aula' })
	@IsString()
	@Length(1, 10)
	@IsNotEmpty()
	roomCode: string;

	@ApiProperty({ example: '1', description: 'Piso' })
	@IsString()
	@Length(1, 1)
	@IsNotEmpty()
	floor: string;

	@ApiPropertyOptional({ example: true, description: '¿Está activa la ubicación?' })
	@IsBoolean()
	@IsOptional()
	isActive?: boolean = true;
}

export class UpdateEquipmentLocationDto {
	@ApiPropertyOptional({ example: 'Laboratorio 1', description: 'Nombre de la ubicación' })
	@IsString()
	@Length(1, 50)
	@IsOptional()
	name?: string;

	@ApiPropertyOptional({ example: 3, description: 'ID del usuario asignado' })
	@IsOptional()
	assignedUser?: number;

	@ApiPropertyOptional({ example: true, description: '¿Es de secundaria?' })
	@IsBoolean()
	@IsOptional()
	isHighSchool?: boolean;

	@ApiPropertyOptional({ example: false, description: '¿Es administrativa?' })
	@IsBoolean()
	@IsOptional()
	isAdministrative?: boolean;

	@ApiPropertyOptional({ example: 'A101', description: 'Código del aula' })
	@IsString()
	@Length(1, 10)
	@IsOptional()
	roomCode?: string;

	@ApiPropertyOptional({ example: '1', description: 'Piso' })
	@IsString()
	@Length(1, 1)
	@IsOptional()
	floor?: string;

	@ApiPropertyOptional({ example: true, description: '¿Está activa la ubicación?' })
	@IsBoolean()
	@IsOptional()
	isActive?: boolean;
}

export class EquipmentLocationResponseDto {
	@ApiProperty({ example: 1, description: 'ID de la ubicación' })
	equipmentLocationId: number;

	@ApiProperty({ example: 'Laboratorio 1', description: 'Nombre de la ubicación' })
	name: string;

	@ApiProperty({ example: 3, description: 'ID del usuario asignado' })
	assignedUser: number;

	@ApiProperty({ example: true, description: '¿Es de secundaria?' })
	isHighSchool: boolean;

	@ApiProperty({ example: false, description: '¿Es administrativa?' })
	isAdministrative: boolean;

	@ApiProperty({ example: 'A101', description: 'Código del aula' })
	roomCode: string;

	@ApiProperty({ example: '1', description: 'Piso' })
	floor: string;

	@ApiProperty({ example: true, description: '¿Está activa la ubicación?' })
	isActive: boolean;
}

export class CreateEquipmentTypeDto {
	@ApiProperty({ example: 'LAPTOP', description: 'Código único del tipo de equipo' })
	@IsString()
	@Length(1, 10)
	@IsNotEmpty()
	equipmentTypeCode: string;

	@ApiProperty({ example: 'Laptop', description: 'Nombre del tipo de equipo' })
	@IsString()
	@Length(1, 25)
	@IsNotEmpty()
	name: string;

	@ApiProperty({ example: 'Computadora portátil', description: 'Descripción del tipo de equipo' })
	@IsString()
	@Length(1, 50)
	@IsNotEmpty()
	description: string;

	@ApiPropertyOptional({ example: true, description: 'Indica si el tipo de equipo está activo' })
	@IsBoolean()
	@IsOptional()
	isActive?: boolean = true;
}

export class UpdateEquipmentTypeDto {
	@ApiPropertyOptional({ example: 'Laptop', description: 'Nombre del tipo de equipo' })
	@IsString()
	@Length(1, 25)
	@IsOptional()
	name?: string;

	@ApiPropertyOptional({ example: 'Computadora portátil', description: 'Descripción del tipo de equipo' })
	@IsString()
	@Length(1, 50)
	@IsOptional()
	description?: string;

	@ApiPropertyOptional({ example: true, description: 'Indica si el tipo de equipo está activo' })
	@IsBoolean()
	@IsOptional()
	isActive?: boolean;
}

export class EquipmentTypeResponseDto {
	@ApiProperty({ example: 'LAPTOP', description: 'Código único del tipo de equipo' })
	equipmentTypeCode: string;

	@ApiProperty({ example: 'Laptop', description: 'Nombre del tipo de equipo' })
	name: string;

	@ApiProperty({ example: 'Computadora portátil', description: 'Descripción del tipo de equipo' })
	description: string;

	@ApiProperty({ example: true, description: 'Indica si el tipo de equipo está activo' })
	isActive: boolean;
}
