import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriversEntity } from './entities/driver.entity';

import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriversEntity)
    private readonly driversRepository: Repository<DriversEntity>,
  ) {}

  /**
   * 获取所有车手
   *
   * @returns
   */
  findAll() {
    return `find all`;
  }

  /**
   * 获取单个车手
   *
   * @param name 名称
   * @returns
   */
  async findOne(name: string) {
    const sql = `SELECT * FROM drivers WHERE name = '${name}'`;
    try {
      const user = await this.driversRepository.query(sql);
      return user[0];
    } catch (error) {
      console.error(error);
      return void 0;
    }
  }

  /**
   * 新增车手
   *
   * @param createDriverDto
   * @returns
   */
  create(createDriverDto: CreateDriverDto) {
    console.log(createDriverDto);
    return 'create';
  }

  /**
   * 编辑车手
   *
   * @param name 名称
   * @param updateDriverDto
   * @returns
   */
  update(name: string, updateDriverDto: UpdateDriverDto) {
    console.log(updateDriverDto);
    return `updates ${name}`;
  }

  /**
   * 删除车手
   *
   * @param name 名称
   * @returns
   */
  remove(name: string) {
    return `removes ${name}`;
  }
}
