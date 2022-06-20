import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty({ description: 'ID' })
  id: number;

  @ApiProperty({ description: '站次' })
  round: string;

  @ApiProperty({ description: '年份' })
  year: string;

  @ApiProperty({ description: '月份' })
  month: string;

  @ApiProperty({ description: '日期开始时间' })
  start_date: string;

  @ApiProperty({ description: '日期结束时间' })
  end_date: string;

  @ApiProperty({ description: '位置' })
  event_place: string;

  @ApiProperty({ description: '标题' })
  event_title: string;

  @ApiProperty({ description: '国旗图片' })
  country_flag_img: string;

  @ApiProperty({ description: '赛道图' })
  circuit_img: string;
}
