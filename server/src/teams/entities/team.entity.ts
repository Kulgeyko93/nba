import { Coache } from 'src/coaches/entities/coache.entity';
import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateCreation: string;

  @OneToOne((type) => Coache, (coach: Coache) => coach.team, {
    cascade: true,
  })
  @JoinColumn()
  coach?: Coache;

  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => Player, (player: Player) => player.team, {
    cascade: true,
  })
  @JoinColumn()
  players?: Player[];
}
