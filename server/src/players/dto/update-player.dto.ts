import { PartialType } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { CreatePlayerDto } from './create-player.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @Column()
  name?: string;

  @Column()
  surname?: string;

  @Column()
  birthday?: string;

  @Column()
  height?: number;

  @Column()
  weight?: number;

  @Column({ nullable: true })
  beforeNba?: string;

  @Column()
  gameNumber?: number;

  @Column()
  experienceInNba?: number;

  @Column()
  countryOfBirth?: string;

  @Column()
  position?: string;

  @Column()
  teamId?: number;
}
