import { PartialType } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { CreateTeamDto } from './create-team.dto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  @Column()
  name?: string;

  @Column()
  dateCreation?: string;

  @Column()
  coach?: string;

  @Column()
  description?: string;
}
