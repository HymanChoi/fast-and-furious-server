import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { TeamStandingsService } from './team-standings.service';
import { CreateTeamStandingDto } from './dto/create-team-standing.dto';
import { UpdateTeamStandingDto } from './dto/update-team-standing.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../../pipe/validation.pipe';

@ApiTags('车队排名')
@Controller('team-standings')
export class TeamStandingsController {
  constructor(private readonly teamStandingsService: TeamStandingsService) {}

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post()
  @ApiOperation({ summary: '新增车队排名' })
  create(@Body() createTeamStandingDto: CreateTeamStandingDto) {
    return this.teamStandingsService.create(createTeamStandingDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有年份车队排名' })
  findAll() {
    return this.teamStandingsService.findAll();
  }

  @Get(':year')
  @ApiOperation({ summary: '获取单个年份车队排名' })
  findOne(@Param('year') year: string) {
    return this.teamStandingsService.findOne(year);
  }

  @Patch(':year')
  @ApiOperation({ summary: '编辑车队排名' })
  update(
    @Param('year') year: string,
    @Body() updateTeamStandingDto: UpdateTeamStandingDto,
  ) {
    return this.teamStandingsService.update(year, updateTeamStandingDto);
  }

  @Delete(':year')
  @ApiOperation({ summary: '删除车队排名' })
  remove(@Param('year') year: string) {
    return this.teamStandingsService.remove(year);
  }
}
