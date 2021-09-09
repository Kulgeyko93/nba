import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  ) {}
  async create(createTeamDto: any) {
    const team = await this.teamRepository.create(createTeamDto);
    return await this.teamRepository.save(team);
  }

  async findAll() {
    return await this.teamRepository.find({ relations: ['players'] });
  }

  async findOne(id: number) {
    const team = await this.teamRepository.findOne(id, {
      relations: ['players'],
    });

    if (!team) throw new Error('Team not found');

    return team;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.findOne(id);
    const updateTeam = Object.assign(team, updateTeamDto);

    return await this.teamRepository.save(updateTeam);
  }

  async remove(id: number) {
    this.findOne(id);
    await this.teamRepository.delete(id);
    return true;
  }
}
