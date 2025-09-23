import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment, EquipmentLocation, EquipmentType } from '../../entities';
import { GetEquipmentLocationsByAssignedUserQuery, GetAllEquipmentQuery, GetEquipmentByIdQuery, GetAllEquipmentLocationsQuery, GetEquipmentLocationByIdQuery, GetAllEquipmentTypesQuery, GetEquipmentTypeByIdQuery } from '../../queries/impl';
import { BusinessErrors } from '../../errors/business-error';
import { HttpService } from '@nestjs/axios';

@QueryHandler(GetEquipmentLocationsByAssignedUserQuery)
export class GetEquipmentLocationsByAssignedUserHandler implements IQueryHandler<GetEquipmentLocationsByAssignedUserQuery> {
	constructor(
		@InjectRepository(EquipmentLocation)
		private readonly repo: Repository<EquipmentLocation>,
		private readonly httpService: HttpService,
	) {}

	async execute(query: GetEquipmentLocationsByAssignedUserQuery): Promise<EquipmentLocation[]> {
		// Validar usuario (ajusta la URL según tu microservicio de usuarios)
		const userExists = await this.httpService.get(`http://USUARIOS-SERVICE/api/users/${query.assignedUser}`)
			.toPromise()
			.then(() => true)
			.catch(() => false);
		if (!userExists) throw BusinessErrors.UserNotFound(query.assignedUser);
		return this.repo.find({ where: { assignedUser: query.assignedUser } });
	}
}

@QueryHandler(GetAllEquipmentQuery)
export class GetAllEquipmentHandler implements IQueryHandler<GetAllEquipmentQuery> {
	constructor(
		@InjectRepository(Equipment)
		private readonly repo: Repository<Equipment>,
	) {}

	async execute(): Promise<Equipment[]> {
		return this.repo.find();
	}
}

@QueryHandler(GetEquipmentByIdQuery)
export class GetEquipmentByIdHandler implements IQueryHandler<GetEquipmentByIdQuery> {
	constructor(
		@InjectRepository(Equipment)
		private readonly repo: Repository<Equipment>,
	) {}

	async execute(query: GetEquipmentByIdQuery): Promise<Equipment> {
		const entity = await this.repo.findOneBy({ equipmentId: query.equipmentId });
		if (!entity) throw BusinessErrors.EquipmentNotFound(query.equipmentId);
		return entity;
	}
}
@QueryHandler(GetAllEquipmentLocationsQuery)
export class GetAllEquipmentLocationsHandler implements IQueryHandler<GetAllEquipmentLocationsQuery> {
	constructor(
		@InjectRepository(EquipmentLocation)
		private readonly repo: Repository<EquipmentLocation>,
	) {}

	async execute(): Promise<EquipmentLocation[]> {
		return this.repo.find();
	}
}

@QueryHandler(GetEquipmentLocationByIdQuery)
export class GetEquipmentLocationByIdHandler implements IQueryHandler<GetEquipmentLocationByIdQuery> {
	constructor(
		@InjectRepository(EquipmentLocation)
		private readonly repo: Repository<EquipmentLocation>,
	) {}

	async execute(query: GetEquipmentLocationByIdQuery): Promise<EquipmentLocation> {
		const entity = await this.repo.findOneBy({ equipmentLocationId: query.equipmentLocationId });
		if (!entity) throw BusinessErrors.EquipmentLocationNotFound(query.equipmentLocationId);
		return entity;
	}
}

@QueryHandler(GetAllEquipmentTypesQuery)
export class GetAllEquipmentTypesHandler implements IQueryHandler<GetAllEquipmentTypesQuery> {
	constructor(
		@InjectRepository(EquipmentType)
		private readonly repo: Repository<EquipmentType>,
	) {}

	async execute(): Promise<EquipmentType[]> {
		return this.repo.find();
	}
}

@QueryHandler(GetEquipmentTypeByIdQuery)
export class GetEquipmentTypeByIdHandler implements IQueryHandler<GetEquipmentTypeByIdQuery> {
	constructor(
		@InjectRepository(EquipmentType)
		private readonly repo: Repository<EquipmentType>,
	) {}

	async execute(query: GetEquipmentTypeByIdQuery): Promise<EquipmentType> {
		const entity = await this.repo.findOneBy({ equipmentTypeCode: query.equipmentTypeCode });
		if (!entity) throw BusinessErrors.EquipmentTypeNotFound(query.equipmentTypeCode);
		return entity;
	}
}

export const QueryHandlers = [
	GetEquipmentLocationsByAssignedUserHandler,
	GetAllEquipmentHandler,
	GetEquipmentByIdHandler,
	GetAllEquipmentTypesHandler,
	GetEquipmentTypeByIdHandler,
	GetAllEquipmentLocationsHandler,
	GetEquipmentLocationByIdHandler,
];
