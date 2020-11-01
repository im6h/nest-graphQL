import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TododService } from './todod.service';
import { TododResolver } from './todod.resolver';
import { Todod } from './todos.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Todod])],
	providers: [TododResolver, TododService],
})
export class TododModule {}
