import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class UpdateEquipmentTypeDto {
  @ApiPropertyOptional({
    example: 'Laptop',
    description: 'Nombre del tipo de equipo',
  })
  @IsString()
  @Length(1, 25)
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'Computadora portátil',
    description: 'Descripción del tipo de equipo',
  })
  @IsString()
  @Length(1, 50)
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica si el tipo de equipo está activo',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
