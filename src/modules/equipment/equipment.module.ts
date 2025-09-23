import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentController } from './controller/equipment.controller';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handler';
import { EquipmentType, EquipmentLocation, Equipment } from './entities';

@Module({
  imports: [CqrsModule, HttpModule, ConfigModule, TypeOrmModule.forFeature([EquipmentType, EquipmentLocation, Equipment])],
  controllers: [EquipmentController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class EquipmentModule {}
