import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DriverStandingsService } from './driver-standings.service';
import { CreateDriverStandingDto } from './dto/create-driver-standing.dto';
import { UpdateDriverStandingDto } from './dto/update-driver-standing.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('车手排名')
@Controller('driver-standings')
export class DriverStandingsController {
  constructor(
    private readonly driverStandingsService: DriverStandingsService,
  ) {}

  @Post()
  @ApiOperation({ summary: '新增车手排名' })
  create(@Body() createDriverStandingDto: CreateDriverStandingDto) {
    return this.driverStandingsService.create(createDriverStandingDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有年份车手排名' })
  findAll() {
    return this.driverStandingsService.findAll();
  }

  @Get(':year')
  @ApiOperation({ summary: '获取单个年份车手排名' })
  findOne(@Param('year') year: number) {
    return this.driverStandingsService.findOne(year);
  }

  @Patch()
  @ApiOperation({ summary: '编辑车手排名' })
  update(@Body() updateDriverStandingDto: UpdateDriverStandingDto) {
    return this.driverStandingsService.update(updateDriverStandingDto);
  }

  @Delete(':year')
  @ApiOperation({ summary: '删除车手排名' })
  remove(@Param('year') year: number) {
    return this.driverStandingsService.remove(year);
  }
}
