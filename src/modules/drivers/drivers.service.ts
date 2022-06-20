import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from './entities/driver.entity';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { resError, resSuccess } from 'src/utils/response';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriverEntity)
    private readonly driverRepository: Repository<DriverEntity>,
  ) {}

  /**
   * 获取所有车手信息
   *
   * @returns
   */
  async findAll() {
    try {
      const drivers = await this.driverRepository.find();
      return resSuccess(drivers);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 获取单个车手信息
   *
   * @param name
   * @returns
   */
  async findOne(name: string) {
    try {
      const driver = await this.driverRepository.findOne({
        where: {
          name,
        },
      });
      return resSuccess(driver);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 新增车手
   *
   * @param createDriverDto
   * @returns
   */
  async create(createDriverDto: CreateDriverDto) {
    try {
      await this.driverRepository.save(createDriverDto);
      return resSuccess('新增成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 编辑车手
   *
   * @param updateDriverDto
   * @returns
   */
  async update(updateDriverDto: UpdateDriverDto) {
    try {
      await this.driverRepository.update(updateDriverDto.id, updateDriverDto);
      return resSuccess('编辑成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 删除车手
   *
   * @param name
   * @returns
   */
  async remove(name: string) {
    try {
      await this.driverRepository.delete({ name });
      return resSuccess('删除成功');
    } catch (error) {
      return resError(error);
    }
  }
}
