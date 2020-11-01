import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput } from './user.input';

@Resolver('User')
export class UserResolver {
	constructor(private readonly service: UserService) {}

	@Query(() => [User])
	async users() {
		return await this.service.findAll();
	}

	@Mutation(() => User)
	async createUser(@Args('input') input: UserInput) {
		return await this.service.create(input);
	}
}
