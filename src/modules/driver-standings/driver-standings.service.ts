import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverStandingEntity } from './entities/driver-standing.entity';

import { CreateDriverStandingDto } from './dto/create-driver-standing.dto';
import { UpdateDriverStandingDto } from './dto/update-driver-standing.dto';

@Injectable()
export class DriverStandingsService {
  constructor(
    @InjectRepository(DriverStandingEntity)
    private readonly driverStandingRepository: Repository<DriverStandingEntity>,
  ) {}

  /**
   * 获取所有年份车手排名
   *
   * @returns
   */
  findAll() {
    return `This action returns all driverStandings`;
  }

  /**
   * 获取单个年份车手排名
   *
   * @param year 年份
   * @returns
   */
  async findOne(year: number) {
    const sql = `
      SELECT * 
      FROM driver_standings
      WHERE year = '${year}'
    `;
    try {
      const driverStanding =
        (await this.driverStandingRepository.query(sql))[0] || 'undefined';
      return {
        statusCode: 200,
        message: 'success',
        data: driverStanding,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'server error',
        data: error,
      };
    }
  }

  create(createDriverStandingDto: CreateDriverStandingDto) {
    console.log(createDriverStandingDto);
    return 'This action adds a new driverStanding';
  }

  update(year: number, updateDriverStandingDto: UpdateDriverStandingDto) {
    console.log(updateDriverStandingDto);
    return `This action updates a #${year} driverStanding`;
  }

  remove(year: number) {
    return `This action removes a #${year} driverStanding`;
  }
}
