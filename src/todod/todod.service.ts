import { Injectable } from '@nestjs/common';
import { Todod } from './todos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';

@Injectable()
export class TododService {
	constructor(
		@InjectRepository(Todod)
		private readonly repository: MongoRepository<Todod>,
	) {}

	async findAll(): Promise<Todod[]> {
		return await this.repository.find();
	}

	async createTodod(todod: Todod): Promise<Todod> {
		const todo = new Todod();
		todo._id = uuid.v4();
		todo.title = todod.title;
		todo.content = todod.content;
		return await this.repository.save(todo);
	}
}
