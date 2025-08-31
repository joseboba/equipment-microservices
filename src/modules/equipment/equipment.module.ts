import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentController } from './controller/equipment.controller';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handler';

@Module({
  imports: [CqrsModule, HttpModule, TypeOrmModule.forFeature([])],
  controllers: [EquipmentController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class EquipmentModule {}
