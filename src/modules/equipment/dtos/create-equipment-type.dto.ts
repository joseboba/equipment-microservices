import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateEquipmentTypeDto {
  @ApiProperty({
    example: 'LAPTOP',
    description: 'Código único del tipo de equipo',
  })
  @IsString()
  @Length(1, 10)
  @IsNotEmpty()
  equipmentTypeCode: string;

  @ApiProperty({ example: 'Laptop', description: 'Nombre del tipo de equipo' })
  @IsString()
  @Length(1, 25)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Computadora portátil',
    description: 'Descripción del tipo de equipo',
  })
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica si el tipo de equipo está activo',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}
