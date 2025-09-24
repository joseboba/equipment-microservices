import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class UpdateEquipmentLocationDto {
  @ApiPropertyOptional({
    example: 'Laboratorio 1',
    description: 'Nombre de la ubicación',
  })
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

  @ApiPropertyOptional({
    example: true,
    description: '¿Está activa la ubicación?',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
