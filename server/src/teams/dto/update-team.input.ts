import { CreateTeamInput } from './create-team.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeamInput extends PartialType(CreateTeamInput) {
  @Field()
  name: string;

  @Field()
  dateCreation: string;

  @Field()
  coach: string;

  @Field({ nullable: true })
  description: string;
}
