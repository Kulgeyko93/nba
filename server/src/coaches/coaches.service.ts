import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamsService } from 'src/teams/teams.service';
import { CannotAttachTreeChildrenEntityError, Repository } from 'typeorm';
import { CreateCoacheDto } from './dto/create-coache.dto';
import { UpdateCoacheDto } from './dto/update-coache.dto';
import { Coache } from './entities/coache.entity';

@Injectable()
export class CoachesService {
  constructor(
    @InjectRepository(CannotAttachTreeChildrenEntityError)
    private readonly coacheRepasitory: Repository<Coache>,
    private readonly teamsService: TeamsService,
  ) {}

  async create(createCoacheDto: CreateCoacheDto) {
    const newCoache = await this.coacheRepasitory.create(createCoacheDto);
    const team = await this.teamsService.findOne(newCoache.teamId);
    newCoache.team = team;
    return await this.coacheRepasitory.save(newCoache);
  }

  async findAll() {
    return await this.coacheRepasitory.find();
  }

  async findOne(id: number) {
    const coache = await this.coacheRepasitory.findOne();
    if (!coache) throw new Error('Not found coache');

    return coache;
  }

  async update(id: number, updateCoachDto: UpdateCoacheDto) {
    const coahe = await this.findOne(id);
    Object.assign(coahe, updateCoachDto);

    return await this.coacheRepasitory.save(coahe);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.coacheRepasitory.delete(id);
    return true;
  }
}
