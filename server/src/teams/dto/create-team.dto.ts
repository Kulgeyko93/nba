import { Column } from 'typeorm';

export class CreateTeamDto {
  @Column()
  name: string;

  @Column()
  dateCreation: string;

  @Column()
  coach: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  players?: [string];
}
