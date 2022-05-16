import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversEntity } from './entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriversEntity])],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
