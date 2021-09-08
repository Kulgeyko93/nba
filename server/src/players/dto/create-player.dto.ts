import { Field, InputType, Int } from '@nestjs/graphql';
import { Team } from 'src/teams/entities/team.entity';

@InputType()
export class CreatePlayerDto {
  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  birthday: string;

  @Field()
  height: number;

  @Field()
  weight: number;

  @Field({ nullable: true })
  beforNBA?: string;

  @Field()
  gameNumber: number;

  @Field()
  experienceInNba: number;

  @Field()
  countryOfBirth: string;

  @Field()
  position: string;

  @Field((type) => Int)
  teamId: number;

  // @Field()
  // team: Team;
}
