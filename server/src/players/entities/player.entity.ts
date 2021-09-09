import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

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
  beforNBA?: string;

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

  @ManyToOne((type) => Team, (team) => team.players)
  @JoinColumn({ name: 'tesmId' })
  team: Team;
}
