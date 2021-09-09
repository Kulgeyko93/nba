import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  imports: [TypeOrmModule.forFeature([Player]), TeamsModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
