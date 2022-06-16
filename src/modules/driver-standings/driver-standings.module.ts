import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverStandingsService } from './driver-standings.service';
import { DriverStandingsController } from './driver-standings.controller';
import { DriverStandingEntity } from './entities/driver-standing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverStandingEntity])],
  controllers: [DriverStandingsController],
  providers: [DriverStandingsService],
})
export class DriverStandingsModule {}
