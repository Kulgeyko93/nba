import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Player } from 'src/players/entities/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Team {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dateCreation: string;

  @Column()
  @Field()
  coach: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description: string;

  @OneToMany(() => Player, (player) => player.team, {
    cascade: true,
    nullable: true,
  })
  @Field(() => [Player], { nullable: true })
  players: Player[];
}
