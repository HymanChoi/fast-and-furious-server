import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('车手')
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  @ApiOperation({ summary: '新增车手' })
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有车手' })
  findAll() {
    return this.driversService.findAll();
  }

  @Get(':name')
  @ApiOperation({ summary: '获取单个车手' })
  async findOne(@Param('name') name: string) {
    return await this.driversService.findOne(name);
  }

  @Patch()
  @ApiOperation({ summary: '编辑车手' })
  update(@Body() updateDriverDto: UpdateDriverDto) {
    return this.driversService.update(updateDriverDto);
  }

  @Delete(':name')
  @ApiOperation({ summary: '删除车手' })
  remove(@Param('name') name: string) {
    return this.driversService.remove(name);
  }
}
