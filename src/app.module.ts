import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversModule } from './modules/drivers/drivers.module';
import { TeamsModule } from './modules/teams/teams.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import db from './database';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db.mysql.host,
      port: db.mysql.port,
      username: db.mysql.user,
      password: db.mysql.password,
      database: db.mysql.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DriversModule,
    TeamsModule,
    SchedulesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
