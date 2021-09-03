import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Table } from 'typeorm';
import { CreateTeamInput } from './dto/create-team.input';
import { UpdateTeamInput } from './dto/update-team.input';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Table) private readonly teamRepository: Repository<Team>,
  ) {}

  async create(createTeamInput: CreateTeamInput) {
    const newTeam = await this.teamRepository.create(createTeamInput);
    return await this.teamRepository.save(newTeam);
  }

  async findAll() {
    return await this.teamRepository.find();
  }

  async findOne(id: number) {
    const team = await this.teamRepository.findOne(id);

    if (!team) throw new Error('Team not found');

    return team;
  }

  async update(id: number, updateTeamInput: UpdateTeamInput) {
    const team = await this.findOne(id);

    if (!team) throw new Error('Team not found');

    const updatedTeam = Object.assign({}, team, updateTeamInput);
    return await this.teamRepository.save(updatedTeam);
  }

  async remove(id: number) {
    const team = this.findOne(id);

    if (!team) throw new Error('Team not found');
    await this.teamRepository.delete(id);
    return true;
  }
}
