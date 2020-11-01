import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Todod {
	@ObjectIdColumn()
	_id: string;

	@Column()
	title: string;

	@Column()
	content: string;
}
