import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CreateCoacheDto } from './dto/create-coache.dto';
import { UpdateCoacheDto } from './dto/update-coache.dto';

@Controller('coaches')
export class CoachesController {
  constructor(private readonly coachesService: CoachesService) {}

  @Post()
  create(@Body() createCoacheDto: CreateCoacheDto) {
    return this.coachesService.create(createCoacheDto);
  }

  @Get()
  findAll() {
    return this.coachesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coachesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoacheDto: UpdateCoacheDto) {
    return this.coachesService.update(+id, updateCoacheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coachesService.remove(+id);
  }
}
