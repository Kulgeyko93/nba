import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamsService } from 'src/teams/teams.service';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    private readonly teamsService: TeamsService,
  ) {}
  async create(createPlayerDto: CreatePlayerDto) {
    const player = await this.playerRepository.create(createPlayerDto);
    const team = await this.teamsService.findOne(player.teamId);

    player.team = team;

    return await this.playerRepository.save(player);
  }

  async findAll() {
    return await this.playerRepository.find();
  }

  async findOne(id: number) {
    const player = await this.playerRepository.findOne(id);
    if (!player) throw new Error('Player not found');

    return player;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.findOne(id);
    const updatePlayer = Object.assign(player, updatePlayerDto);

    return await this.playerRepository.save(updatePlayer);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.playerRepository.delete(id);
    return true;
  }
}
