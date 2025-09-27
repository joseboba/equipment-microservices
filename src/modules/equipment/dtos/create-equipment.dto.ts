import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

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

  @ApiPropertyOptional({
    example: 'EliteBook',
    description: 'Modelo del equipo',
  })
  @IsString()
  @Length(1, 25)
  @IsOptional()
  model?: string;

  @ApiProperty({ example: 1, description: 'ID de la ubicación del equipo' })
  @IsInt()
  @IsNotEmpty()
  equipmentLocationId: number;

  @ApiProperty({
    example: '2025-12-31T00:00:00.000Z',
    description: 'Fecha de expiración de la garantía',
  })
  @IsDateString()
  @IsNotEmpty()
  warrantyExpiredDate: Date;

  @ApiPropertyOptional({
    example: false,
    description: '¿La garantía está expirada?',
  })
  @IsBoolean()
  @IsOptional()
  isWarrantyExpired?: boolean;

  @ApiPropertyOptional({
    example: true,
    description: '¿Está activo el equipo?',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}