import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Team } from 'src/teams/entities/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Player {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  surname: string;

  @Column()
  @Field()
  birthday: string;

  @Column()
  @Field()
  height: number;

  @Column()
  @Field()
  weight: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  beforNBA?: string;

  @Column()
  @Field()
  gameNumber: number;

  @Column()
  @Field()
  experienceInNba: number;

  @Column()
  @Field()
  countryOfBirth: string;

  @Column()
  @Field()
  position: string;

  @Column()
  @Field()
  teamId: number;

  @ManyToOne(() => Team, (team) => team.players)
  @Field(() => Team)
  team: string;
}
