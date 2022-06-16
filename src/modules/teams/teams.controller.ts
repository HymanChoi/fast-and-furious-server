import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('车队')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @ApiOperation({ summary: '新增车队' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有车队' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':name')
  @ApiOperation({ summary: '获取单个车队' })
  findOne(@Param('name') name: string) {
    return this.teamsService.findOne(name);
  }

  @Patch()
  @ApiOperation({ summary: '编辑车队' })
  update(@Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(updateTeamDto);
  }

  @Delete(':name')
  @ApiOperation({ summary: '删除车队' })
  remove(@Param('name') name: string) {
    return this.teamsService.remove(name);
  }
}
