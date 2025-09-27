import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateEquipmentLocationDto {
  @ApiProperty({
    example: 'Laboratorio 1',
    description: 'Nombre de la ubicación',
  })
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 3, description: 'ID del usuario asignado' })
  @IsOptional()
  assignedUser?: number;

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

  @ApiPropertyOptional({
    example: true,
    description: '¿Está activa la ubicación?',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}
