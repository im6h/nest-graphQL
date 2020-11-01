import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TododModule } from './todod/todod.module';
import { join } from 'path';

@Module({
	imports: [
		GraphQLModule.forRoot({
			typePaths: ['**/*.graphql'],
			playground: true,
		}),
		TypeOrmModule.forRoot({
			type: 'mongodb',
			url:
				'mongodb+srv://dangvu:haidang1807^^@cluster0.6rrys.azure.mongodb.net/graphql?retryWrites=true&w=majority',
			entities: [join(__dirname, '**/**.entity{.ts,.js}')],
			synchronize: true,
			useNewUrlParser: true,
			logging: true,
		}),
		UserModule,
		TododModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
