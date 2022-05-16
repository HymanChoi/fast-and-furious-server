import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }

  findAll() {
    return `This action returns all teams`;
  }

  findOne(name: string) {
    return `This action returns a #${name} team`;
  }

  update(name: string, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${name} team`;
  }

  remove(name: string) {
    return `This action removes a #${name} team`;
  }
}
