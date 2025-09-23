import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment, EquipmentLocation, EquipmentType } from '../../entities';
import { CreateEquipmentCommand, UpdateEquipmentCommand, DeleteEquipmentCommand, CreateEquipmentLocationCommand, UpdateEquipmentLocationCommand, DeleteEquipmentLocationCommand, CreateEquipmentTypeCommand, UpdateEquipmentTypeCommand, DeleteEquipmentTypeCommand } from '../../commands/impl';
import { BusinessErrors } from '../../errors/business-error';
import { HttpService } from '@nestjs/axios';
@CommandHandler(CreateEquipmentCommand)
export class CreateEquipmentHandler implements ICommandHandler<CreateEquipmentCommand> {
	constructor(
		@InjectRepository(Equipment)
		private readonly repo: Repository<Equipment>,
		@InjectRepository(EquipmentLocation)
		private readonly locationRepo: Repository<EquipmentLocation>,
	) {}

	async execute(command: CreateEquipmentCommand): Promise<Equipment> {
		// Validar que la ubicación exista
		const location = await this.locationRepo.findOneBy({ equipmentLocationId: command.dto.equipmentLocationId });
		if (!location) throw BusinessErrors.EquipmentLocationNotFound(command.dto.equipmentLocationId);
		const exists = await this.repo.findOneBy({ serialNumber: command.dto.serialNumber });
		if (exists) throw BusinessErrors.EquipmentSerialNumberAlreadyExists(command.dto.serialNumber);
		const entity = this.repo.create(command.dto);
		return this.repo.save(entity);
	}
}

@CommandHandler(UpdateEquipmentCommand)
export class UpdateEquipmentHandler implements ICommandHandler<UpdateEquipmentCommand> {
	constructor(
		@InjectRepository(Equipment)
		private readonly repo: Repository<Equipment>,
	) {}

	async execute(command: UpdateEquipmentCommand): Promise<Equipment> {
		const entity = await this.repo.findOneBy({ equipmentId: command.equipmentId });
		if (!entity) throw BusinessErrors.EquipmentNotFound(command.equipmentId);
		Object.assign(entity, command.dto);
		return this.repo.save(entity);
	}
}

@CommandHandler(DeleteEquipmentCommand)
export class DeleteEquipmentHandler implements ICommandHandler<DeleteEquipmentCommand> {
	constructor(
		@InjectRepository(Equipment)
		private readonly repo: Repository<Equipment>,
	) {}

	async execute(command: DeleteEquipmentCommand): Promise<void> {
		const entity = await this.repo.findOneBy({ equipmentId: command.equipmentId });
		if (!entity) throw BusinessErrors.EquipmentNotFound(command.equipmentId);
		await this.repo.delete({ equipmentId: command.equipmentId });
	}
}
@CommandHandler(CreateEquipmentLocationCommand)
export class CreateEquipmentLocationHandler implements ICommandHandler<CreateEquipmentLocationCommand> {
	constructor(
		@InjectRepository(EquipmentLocation)
		private readonly repo: Repository<EquipmentLocation>,
		private readonly httpService: HttpService,
	@Inject(ConfigService)
	private readonly configService: ConfigService,
	) {}

	async execute(command: CreateEquipmentLocationCommand): Promise<EquipmentLocation> {

		// Validar usuario solo si assignedUser está presente
		if (command.dto.assignedUser !== undefined && command.dto.assignedUser !== null) {
			// Usar el adaptador para obtener el usuario
			const userAdapter = new (require('../../../../infrastructure/microservices-adapters/get-user-app-by-id-adapter.service')).GetUserAppByIdAdapterService(
				this.configService,
				this.httpService
			);
			let userApp: any;
			const result = await userAdapter.execute(command.dto.assignedUser);
			if (result && typeof result === 'object' && 'error' in result) {
				if (result.error === 'USER.NoUserTechnical') throw BusinessErrors.UserNoUserTechnical(command.dto.assignedUser);
				if (result.error === 'USER.NotFound') throw BusinessErrors.UserNotFound(command.dto.assignedUser);
			}
		}

		const exists = await this.repo.findOneBy({ name: command.dto.name });
		if (exists) throw BusinessErrors.EquipmentLocationNameAlreadyExists(command.dto.name);
		const entity = this.repo.create(command.dto);
		return this.repo.save(entity);
	}
}

@CommandHandler(UpdateEquipmentLocationCommand)
export class UpdateEquipmentLocationHandler implements ICommandHandler<UpdateEquipmentLocationCommand> {
	constructor(
		@InjectRepository(EquipmentLocation)
		private readonly repo: Repository<EquipmentLocation>,
	) {}

	async execute(command: UpdateEquipmentLocationCommand): Promise<EquipmentLocation> {
		const entity = await this.repo.findOneBy({ equipmentLocationId: command.equipmentLocationId });
		if (!entity) throw BusinessErrors.EquipmentLocationNotFound(command.equipmentLocationId);
		Object.assign(entity, command.dto);
		return this.repo.save(entity);
	}
}

@CommandHandler(DeleteEquipmentLocationCommand)
export class DeleteEquipmentLocationHandler implements ICommandHandler<DeleteEquipmentLocationCommand> {
	constructor(
		@InjectRepository(EquipmentLocation)
		private readonly repo: Repository<EquipmentLocation>,
	) {}

	async execute(command: DeleteEquipmentLocationCommand): Promise<void> {
		const entity = await this.repo.findOneBy({ equipmentLocationId: command.equipmentLocationId });
		if (!entity) throw BusinessErrors.EquipmentLocationNotFound(command.equipmentLocationId);
		await this.repo.delete({ equipmentLocationId: command.equipmentLocationId });
	}
}

@CommandHandler(CreateEquipmentTypeCommand)
export class CreateEquipmentTypeHandler implements ICommandHandler<CreateEquipmentTypeCommand> {
	constructor(
		@InjectRepository(EquipmentType)
		private readonly repo: Repository<EquipmentType>,
	) {}

	async execute(command: CreateEquipmentTypeCommand): Promise<EquipmentType> {
		const exists = await this.repo.findOneBy({ equipmentTypeCode: command.dto.equipmentTypeCode });
		if (exists) throw BusinessErrors.EquipmentTypeCodeAlreadyExists(command.dto.equipmentTypeCode);
		const entity = this.repo.create(command.dto);
		return this.repo.save(entity);
	}
}

@CommandHandler(UpdateEquipmentTypeCommand)
export class UpdateEquipmentTypeHandler implements ICommandHandler<UpdateEquipmentTypeCommand> {
	constructor(
		@InjectRepository(EquipmentType)
		private readonly repo: Repository<EquipmentType>,
	) {}

	async execute(command: UpdateEquipmentTypeCommand): Promise<EquipmentType> {
		const entity = await this.repo.findOneBy({ equipmentTypeCode: command.equipmentTypeCode });
		if (!entity) throw BusinessErrors.EquipmentTypeNotFound(command.equipmentTypeCode);
		Object.assign(entity, command.dto);
		return this.repo.save(entity);
	}
}

@CommandHandler(DeleteEquipmentTypeCommand)
export class DeleteEquipmentTypeHandler implements ICommandHandler<DeleteEquipmentTypeCommand> {
	constructor(
		@InjectRepository(EquipmentType)
		private readonly repo: Repository<EquipmentType>,
	) {}

	async execute(command: DeleteEquipmentTypeCommand): Promise<void> {
		const entity = await this.repo.findOneBy({ equipmentTypeCode: command.equipmentTypeCode });
		if (!entity) throw BusinessErrors.EquipmentTypeNotFound(command.equipmentTypeCode);
		await this.repo.delete({ equipmentTypeCode: command.equipmentTypeCode });
	}
}

export const CommandHandlers = [
	CreateEquipmentHandler,
	UpdateEquipmentHandler,
	DeleteEquipmentHandler,
	CreateEquipmentTypeHandler,
	UpdateEquipmentTypeHandler,
	DeleteEquipmentTypeHandler,
	CreateEquipmentLocationHandler,
	UpdateEquipmentLocationHandler,
	DeleteEquipmentLocationHandler,
];
