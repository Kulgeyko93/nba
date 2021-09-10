import { Module } from '@nestjs/common';
import { CoachesService } from './coaches.service';
import { CoachesController } from './coaches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coache } from './entities/coache.entity';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  imports: [TypeOrmModule.forFeature([Coache]), TeamsModule],
  controllers: [CoachesController],
  providers: [CoachesService],
})
export class CoachesModule {}
