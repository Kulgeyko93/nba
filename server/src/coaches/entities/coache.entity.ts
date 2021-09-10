import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Coache {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  birthday: string;

  @Column()
  teamId: number;

  @Column()
  expirience: number;

  @OneToOne((type) => Team, (team) => team.coach)
  team: Team;
}
