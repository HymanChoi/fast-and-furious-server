import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('时间表')
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.schedulesService.findOne(id);
  }

  @Patch()
  update(@Body() updateScheduleDto: UpdateScheduleDto) {
    return this.schedulesService.update(updateScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.schedulesService.remove(id);
  }
}
