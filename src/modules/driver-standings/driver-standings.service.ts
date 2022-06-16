import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverStandingEntity } from './entities/driver-standing.entity';
import { CreateDriverStandingDto } from './dto/create-driver-standing.dto';
import { UpdateDriverStandingDto } from './dto/update-driver-standing.dto';
import { resError, resSuccess } from 'src/utils/response';

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
  async findAll() {
    try {
      const driverStandings = await this.driverStandingRepository.find();
      return resSuccess(driverStandings);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 获取单个年份车手排名
   *
   * @param year 年份
   * @returns
   */
  async findOne(year: number) {
    try {
      const driverStanding = await this.driverStandingRepository.findOne({
        where: { year },
      });
      return resSuccess(driverStanding);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 新增单个年份车手排名
   *
   * @param createDriverStandingDto
   * @returns
   */
  async create(createDriverStandingDto: CreateDriverStandingDto) {
    try {
      await this.driverStandingRepository.save(createDriverStandingDto);
      return resSuccess('新增成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 编辑单个年份车手排名
   *
   * @param updateDriverStandingDto
   * @returns
   */
  async update(updateDriverStandingDto: UpdateDriverStandingDto) {
    try {
      await this.driverStandingRepository.update(
        updateDriverStandingDto.year,
        updateDriverStandingDto,
      );
      return resSuccess('编辑成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 删除单个年份车手排名
   *
   * @param year
   * @returns
   */
  async remove(year: number) {
    try {
      await this.driverStandingRepository.delete(year);
      return resSuccess('删除成功');
    } catch (error) {
      return resError(error);
    }
  }
}
