import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamStandingEntity } from './entities/team-standing.entity';

import { CreateTeamStandingDto } from './dto/create-team-standing.dto';
import { UpdateTeamStandingDto } from './dto/update-team-standing.dto';

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
  findAll() {
    return `This action returns all teamStandings`;
  }

  /**
   * 获取单个年份车队排名
   *
   * @param year
   * @returns
   */
  async findOne(year: string) {
    const sql = `
      SELECT * 
      FROM team_standings
      WHERE year = '${year}'
    `;
    try {
      const teamStanding =
        (await this.teamStandingRepository.query(sql))[0] || 'undefined';
      return {
        statusCode: 200,
        message: 'success',
        data: teamStanding,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'server error',
        data: error,
      };
    }
  }

  create(createTeamStandingDto: CreateTeamStandingDto) {
    console.log(createTeamStandingDto);
    return 'This action adds a new teamStanding';
  }

  update(year: string, updateTeamStandingDto: UpdateTeamStandingDto) {
    console.log(updateTeamStandingDto);
    return `This action updates a #${year} teamStanding`;
  }

  remove(year: string) {
    return `This action removes a #${year} teamStanding`;
  }
}
