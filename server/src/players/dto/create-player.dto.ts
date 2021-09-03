import { Field, InputType } from '@nestjs/graphql';

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
}
