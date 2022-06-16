import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { resError, resSuccess } from 'src/utils/response';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
  ) {}

  /**
   * 获取所有车队信息
   *
   * @returns
   */
  async findAll() {
    try {
      const teams = await this.teamRepository.find();
      return resSuccess(teams);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 获取单个车队信息
   *
   * @param name
   * @returns
   */
  async findOne(name: string) {
    try {
      const team = await this.teamRepository.findOne({
        where: {
          name,
        },
      });
      return resSuccess(team);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 新增车队
   *
   * @param createTeamDto
   * @returns
   */
  async create(createTeamDto: CreateTeamDto) {
    try {
      await this.teamRepository.save(createTeamDto);
      return resSuccess('新增成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 编辑车队
   *
   * @param updateTeamDto
   * @returns
   */
  async update(updateTeamDto: UpdateTeamDto) {
    try {
      await this.teamRepository.update(updateTeamDto.id, updateTeamDto);
      return resSuccess('编辑成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 删除车队
   *
   * @param name
   * @returns
   */
  async remove(name: string) {
    try {
      await this.teamRepository.delete({ name });
      return resSuccess('删除成功');
    } catch (error) {
      return resError(error);
    }
  }
}
