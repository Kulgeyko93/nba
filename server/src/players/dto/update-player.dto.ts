import { Field, InputType } from '@nestjs/graphql';
import { Team } from 'src/teams/entities/team.entity';

@InputType()
export class UpdatePlayerDto {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  surname: string;

  @Field({ nullable: true })
  birthday: string;

  @Field({ nullable: true })
  height: number;

  @Field({ nullable: true })
  weight: number;

  @Field({ nullable: true })
  beforNBA: string;

  @Field({ nullable: true })
  gameNumber: number;

  @Field({ nullable: true })
  experienceInNba?: number;

  @Field({ nullable: true })
  countryOfBirth: string;

  @Field({ nullable: true })
  position: string;
}
