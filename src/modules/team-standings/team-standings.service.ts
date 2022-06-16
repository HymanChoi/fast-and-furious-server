import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamStandingEntity } from './entities/team-standing.entity';
import { CreateTeamStandingDto } from './dto/create-team-standing.dto';
import { UpdateTeamStandingDto } from './dto/update-team-standing.dto';
import { resError, resSuccess } from 'src/utils/response';

@Injectable()
export class TeamStandingsService {
  constructor(
    @InjectRepository(TeamStandingEntity)
    private readonly teamStandingRepository: Repository<TeamStandingEntity>,
  ) {}

  /**
   * 获取所有年份车队排名
   *
   * @returns
   */
  async findAll() {
    try {
      const teamStandings = await this.teamStandingRepository.find();
      return resSuccess(teamStandings);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 获取单个年份车队排名
   *
   * @param year
   * @returns
   */
  async findOne(year: number) {
    try {
      const teamStanding = await this.teamStandingRepository.findOne({
        where: { year },
      });
      return resSuccess(teamStanding);
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 新增单个年份车队排名
   *
   * @param createTeamStandingDto
   * @returns
   */
  async create(createTeamStandingDto: CreateTeamStandingDto) {
    try {
      await this.teamStandingRepository.save(createTeamStandingDto);
      return resSuccess('新增成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 编辑单个年份车队排名
   *
   * @param updateTeamStandingDto
   * @returns
   */
  async update(updateTeamStandingDto: UpdateTeamStandingDto) {
    try {
      await this.teamStandingRepository.update(
        updateTeamStandingDto.year,
        updateTeamStandingDto,
      );
      return resSuccess('编辑成功');
    } catch (error) {
      return resError(error);
    }
  }

  /**
   * 删除单个年份车队排名
   *
   * @param year
   * @returns
   */
  async remove(year: number) {
    try {
      await this.teamStandingRepository.delete(year);
      return resSuccess('删除成功');
    } catch (error) {
      return resError(error);
    }
  }
}
