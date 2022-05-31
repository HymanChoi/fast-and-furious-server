import { Module } from '@nestjs/common';
import { TeamStandingsService } from './team-standings.service';
import { TeamStandingsController } from './team-standings.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamStandingEntity } from './entities/team-standing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamStandingEntity])],
  controllers: [TeamStandingsController],
  providers: [TeamStandingsService],
})
export class TeamStandingsModule {}
