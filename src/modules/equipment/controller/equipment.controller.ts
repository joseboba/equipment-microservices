// ...existing code...
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreateEquipmentDto,
  CreateEquipmentLocationDto,
  CreateEquipmentTypeDto,
  UpdateEquipmentDto,
  UpdateEquipmentLocationDto,
  UpdateEquipmentTypeDto,
} from '@dtos';
import {
  CreateEquipmentCommand,
  CreateEquipmentLocationCommand,
  CreateEquipmentTypeCommand,
  DeleteEquipmentCommand,
  DeleteEquipmentLocationCommand,
  DeleteEquipmentTypeCommand,
  UpdateEquipmentCommand,
  UpdateEquipmentLocationCommand,
  UpdateEquipmentTypeCommand,
} from '../commands/impl';
import {
  GetAllEquipmentLocationsQuery,
  GetAllEquipmentQuery,
  GetAllEquipmentTypesQuery,
  GetEquipmentByIdQuery,
  GetEquipmentLocationByIdQuery,
  GetEquipmentTypeByIdQuery,
} from '../queries/impl';
import { Equipment, EquipmentLocation, EquipmentType } from '@entities';
import { Public } from 'incident-management-commons';

@Controller()
export class EquipmentController {
  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _queryBus: QueryBus,
  ) {}

  // --- EQUIPMENT CRUD ---
  @Post('equipment')
  async createEquipment(@Body() dto: CreateEquipmentDto): Promise<Equipment> {
    return this._commandBus.execute(new CreateEquipmentCommand(dto));
  }

  @Get('equipment')
  async getAllEquipment(): Promise<Equipment[]> {
    return this._queryBus.execute(new GetAllEquipmentQuery());
  }

  @Get('equipment/:id')
  async getEquipmentById(@Param('id') id: number): Promise<Equipment> {
    return await this._queryBus.execute(new GetEquipmentByIdQuery(Number(id)));
  }

  @Put('equipment/:id')
  async updateEquipment(
    @Param('id') id: number,
    @Body() dto: UpdateEquipmentDto,
  ): Promise<Equipment> {
    return this._commandBus.execute(
      new UpdateEquipmentCommand(Number(id), dto),
    );
  }

  @Delete('equipment/:id')
  async deleteEquipment(@Param('id') id: number) {
    await this._commandBus.execute(new DeleteEquipmentCommand(Number(id)));
    return { message: 'Deleted successfully' };
  }

  // --- EQUIPMENT TYPE CRUD ---
  @Post('equipment-type')
  async createEquipmentType(
    @Body() dto: CreateEquipmentTypeDto,
  ): Promise<EquipmentType> {
    return this._commandBus.execute(new CreateEquipmentTypeCommand(dto));
  }

  @Get('equipment-type')
  async getAllEquipmentTypes(): Promise<EquipmentType[]> {
    return this._queryBus.execute(new GetAllEquipmentTypesQuery());
  }

  @Get('equipment-type/:code')
  async getEquipmentTypeById(
    @Param('code') code: string,
  ): Promise<EquipmentType> {
    return await this._queryBus.execute(new GetEquipmentTypeByIdQuery(code));
  }

  @Put('equipment-type/:code')
  async updateEquipmentType(
    @Param('code') code: string,
    @Body() dto: UpdateEquipmentTypeDto,
  ): Promise<EquipmentType> {
    return this._commandBus.execute(new UpdateEquipmentTypeCommand(code, dto));
  }

  @Delete('equipment-type/:code')
  async deleteEquipmentType(@Param('code') code: string): Promise<void> {
    return await this._commandBus.execute(new DeleteEquipmentTypeCommand(code));
  }

  // --- EQUIPMENT LOCATION CRUD ---
  @Post('equipment-location')
  async createEquipmentLocation(
    @Body() dto: CreateEquipmentLocationDto,
  ): Promise<EquipmentLocation> {
    return this._commandBus.execute(new CreateEquipmentLocationCommand(dto));
  }

  @Get('equipment-location')
  async getAllEquipmentLocations(): Promise<EquipmentLocation[]> {
    return this._queryBus.execute(new GetAllEquipmentLocationsQuery());
  }

  @Get('equipment-location/:id')
  @Public()
  async getEquipmentLocationById(
    @Param('id') id: number,
  ): Promise<EquipmentLocation> {
    return this._queryBus.execute(
      new GetEquipmentLocationByIdQuery(Number(id)),
    );
  }

  @Put('equipment-location/:id')
  async updateEquipmentLocation(
    @Param('id') id: number,
    @Body() dto: UpdateEquipmentLocationDto,
  ): Promise<EquipmentLocation> {
    return this._commandBus.execute(
      new UpdateEquipmentLocationCommand(Number(id), dto),
    );
  }

  @Delete('equipment-location/:id')
  async deleteEquipmentLocation(@Param('id') id: number): Promise<void> {
    await this._commandBus.execute(
      new DeleteEquipmentLocationCommand(Number(id)),
    );
  }
}
