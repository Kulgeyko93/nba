import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players/entities/player.entity';
import { PlayersModule } from './players/players.module';
import { Team } from './teams/entities/team.entity';
import { TeamsModule } from './teams/teams.module';
import { CoachesModule } from './coaches/coaches.module';
import { Coache } from './coaches/entities/coache.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Player, Team, Coache],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PlayersModule,
    TeamsModule,
    CoachesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
