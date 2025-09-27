// ...existing code...
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { 
  CreateEquipmentTypeDto, UpdateEquipmentTypeDto, 
  CreateEquipmentLocationDto, UpdateEquipmentLocationDto, 
  CreateEquipmentDto, UpdateEquipmentDto 
} from '../dtos';
import { 
  CreateEquipmentTypeCommand, UpdateEquipmentTypeCommand, DeleteEquipmentTypeCommand, 
  CreateEquipmentLocationCommand, UpdateEquipmentLocationCommand, DeleteEquipmentLocationCommand, 
  CreateEquipmentCommand, UpdateEquipmentCommand, DeleteEquipmentCommand 
} from '../commands/impl';
import { 
  GetAllEquipmentTypesQuery, GetEquipmentTypeByIdQuery, 
  GetAllEquipmentLocationsQuery, GetEquipmentLocationByIdQuery, 
  GetAllEquipmentQuery, GetEquipmentByIdQuery, GetEquipmentLocationsByAssignedUserQuery 
} from '../queries/impl';

@Controller()
export class EquipmentController {

  @Get('equipment/by-user/:userId')
  async getEquipmentByUser(@Param('userId') userId: number) {

    const locations = await this._queryBus.execute(new GetEquipmentLocationsByAssignedUserQuery(Number(userId)));
    if (!locations || locations.length === 0) return [];
    const locationIds = locations.map((loc: any) => loc.equipmentLocationId);
    const allEquipment = await this._queryBus.execute(new GetAllEquipmentQuery());
    return allEquipment.filter((eq: any) => locationIds.includes(eq.equipmentLocationId));
  }
  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _queryBus: QueryBus,
  ) {}

  // --- EQUIPMENT CRUD ---
  @Post('equipment')
  async createEquipment(@Body() dto: CreateEquipmentDto) {
    return this._commandBus.execute(new CreateEquipmentCommand(dto));
  }

  @Get('equipment')
  async getAllEquipment() {
    return this._queryBus.execute(new GetAllEquipmentQuery());
  }

  @Get('equipment/:id')
  async getEquipmentById(@Param('id') id: number) {
    const result = await this._queryBus.execute(new GetEquipmentByIdQuery(Number(id)));
    if (!result) throw new NotFoundException('Equipment not found');
    return result;
  }

  @Put('equipment/:id')
  async updateEquipment(
    @Param('id') id: number,
    @Body() dto: UpdateEquipmentDto,
  ) {
    return this._commandBus.execute(new UpdateEquipmentCommand(Number(id), dto));
  }

  @Delete('equipment/:id')
  async deleteEquipment(@Param('id') id: number) {
    await this._commandBus.execute(new DeleteEquipmentCommand(Number(id)));
    return { message: 'Deleted successfully' };
  }

  // --- EQUIPMENT TYPE CRUD ---
  @Post('equipment-type')
  async createEquipmentType(@Body() dto: CreateEquipmentTypeDto) {
    return this._commandBus.execute(new CreateEquipmentTypeCommand(dto));
  }

  @Get('equipment-type')
  async getAllEquipmentTypes() {
    return this._queryBus.execute(new GetAllEquipmentTypesQuery());
  }

  @Get('equipment-type/:code')
  async getEquipmentTypeById(@Param('code') code: string) {
    const result = await this._queryBus.execute(new GetEquipmentTypeByIdQuery(code));
    if (!result) throw new NotFoundException('EquipmentType not found');
    return result;
  }

  @Put('equipment-type/:code')
  async updateEquipmentType(
    @Param('code') code: string,
    @Body() dto: UpdateEquipmentTypeDto,
  ) {
    return this._commandBus.execute(new UpdateEquipmentTypeCommand(code, dto));
  }

  @Delete('equipment-type/:code')
  async deleteEquipmentType(@Param('code') code: string) {
    await this._commandBus.execute(new DeleteEquipmentTypeCommand(code));
    return { message: 'Deleted successfully' };
  }

  // --- EQUIPMENT LOCATION CRUD ---
  @Post('equipment-location')
  async createEquipmentLocation(@Body() dto: CreateEquipmentLocationDto) {
    return this._commandBus.execute(new CreateEquipmentLocationCommand(dto));
  }

  @Get('equipment-location')
  async getAllEquipmentLocations() {
    return this._queryBus.execute(new GetAllEquipmentLocationsQuery());
  }

  @Get('equipment-location/:id')
  async getEquipmentLocationById(@Param('id') id: number) {
    return this._queryBus.execute(new GetEquipmentLocationByIdQuery(Number(id)));
  }

  @Put('equipment-location/:id')
  async updateEquipmentLocation(
    @Param('id') id: number,
    @Body() dto: UpdateEquipmentLocationDto,
  ) {
    return this._commandBus.execute(new UpdateEquipmentLocationCommand(Number(id), dto));
  }

  @Delete('equipment-location/:id')
  async deleteEquipmentLocation(@Param('id') id: number) {
    await this._commandBus.execute(new DeleteEquipmentLocationCommand(Number(id)));
    return { message: 'Deleted successfully' };
  }
}
