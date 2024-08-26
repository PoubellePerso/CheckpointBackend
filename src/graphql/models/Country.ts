import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Country extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    countryCode: string;

    @Field()
    @Column()
    countryName: string;

    @Field()
    @Column()
    emoji: string;

    @Field()
    @Column()
    continentCode: string;
}
