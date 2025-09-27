import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateEquipmentDto {
  @ApiPropertyOptional({
    example: 'Laptop HP',
    description: 'Nombre del equipo',
  })
  @IsString()
  @Length(1, 25)
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'LAPTOP',
    description: 'Código del tipo de equipo',
  })
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

  @ApiPropertyOptional({
    example: 'EliteBook',
    description: 'Modelo del equipo',
  })
  @IsString()
  @Length(1, 25)
  @IsOptional()
  model?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'ID de la ubicación del equipo',
  })
  @IsInt()
  @IsOptional()
  equipmentLocationId?: number;

  @ApiPropertyOptional({
    example: '2025-12-31T00:00:00.000Z',
    description: 'Fecha de expiración de la garantía',
  })
  @IsDateString()
  @IsOptional()
  warrantyExpiredDate?: Date;

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
  isActive?: boolean;
}
