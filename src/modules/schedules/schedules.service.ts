import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchedulesEntity } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { resError, resSuccess } from 'src/utils/response';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(SchedulesEntity)
    private readonly scheduleRepository: Repository<SchedulesEntity>,
  ) {}

  /**
   * 获取所有场次
   *
   * @returns
   */
  async findAll() {
    try {
      const schedules = await this.scheduleRepository.find();
      return resSuccess(schedules);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 获取单个场次
   *
   * @param id
   * @returns
   */
  async findOne(id: number) {
    try {
      const teamStanding = await this.scheduleRepository.findOne({
        where: { id },
      });
      return resSuccess(teamStanding);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 新增场次
   *
   * @param createScheduleDto
   * @returns
   */
  async create(createScheduleDto: CreateScheduleDto) {
    try {
      await this.scheduleRepository.save(createScheduleDto);
      return resSuccess('新增成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 编辑场次
   *
   * @param updateScheduleDto
   * @returns
   */
  async update(updateScheduleDto: UpdateScheduleDto) {
    try {
      await this.scheduleRepository.update(
        updateScheduleDto.id,
        updateScheduleDto,
      );
      return resSuccess('编辑成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 删除场次
   *
   * @param id
   * @returns
   */
  async remove(id: number) {
    try {
      await this.scheduleRepository.delete({ id });
      return resSuccess('删除成功');
    } catch (error) {
      return resError(error);
    }
  }
}
