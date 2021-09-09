import { Column } from 'typeorm';

export class CreatePlayerDto {
  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  birthday: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column({ nullable: true })
  beforeNba?: string;

  @Column()
  gameNumber: number;

  @Column()
  experienceInNba: number;

  @Column()
  countryOfBirth: string;

  @Column()
  position: string;

  @Column()
  teamId: number;
}
