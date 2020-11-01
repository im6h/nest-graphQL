import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TododService } from './todod.service';
import { Todod } from './todos.entity';

@Resolver('Todod')
export class TododResolver {
	constructor(private readonly service: TododService) {}

	@Query(() => [Todod])
	async todos() {
		return await this.service.findAll();
	}

	@Mutation(() => Todod)
	async createTodod(@Args('todod') todod: Todod) {
		return await this.service.createTodod(todod);
	}
}
