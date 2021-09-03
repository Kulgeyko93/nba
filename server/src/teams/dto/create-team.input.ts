import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeamInput {
  @Field()
  name: string;

  @Field()
  dateCreation: string;

  @Field()
  coach: string;

  @Field({ nullable: true })
  description: string;
}
