import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
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

  @Column()
  coach: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => Player, (player: Player) => player.team, {
    cascade: true,
  })
  players?: Player[];

  addPlayer(player: Player) {
    if (this.players === null) {
      this.players = Array<Player>();
    }
    this.players.push(player);
  }
}
