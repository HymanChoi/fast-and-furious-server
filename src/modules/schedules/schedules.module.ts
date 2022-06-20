import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { SchedulesEntity } from './entities/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SchedulesEntity])],
  controllers: [SchedulesController],
  providers: [SchedulesService],
})
export class SchedulesModule {}
