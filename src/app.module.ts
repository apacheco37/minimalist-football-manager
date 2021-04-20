import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'ormconfig';

import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    PlayerModule,
    TeamModule,
    MatchModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
