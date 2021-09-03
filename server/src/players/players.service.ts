import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}
  async create(createPlayerInput: CreatePlayerDto) {
    const newPlayer = await this.playerRepository.create(createPlayerInput);
    return await this.playerRepository.save(newPlayer);
  }
  async findAll() {
    return await this.playerRepository.find();
  }
  async findOne(id: number) {
    const player = await this.playerRepository.findOne(id);
    if (!player) {
      throw new Error('Player not found');
    }
    return player;
  }
  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.findOne(id);

    const updatedPlayer = Object.assign({}, player, updatePlayerDto);
    return await this.playerRepository.save(updatedPlayer);
  }
  async remove(id: number) {
    const player = await this.playerRepository.findOne(id);

    if (!player) {
      throw new Error('Player not found');
    }
    await this.playerRepository.delete(id);
    return true;
  }
}
