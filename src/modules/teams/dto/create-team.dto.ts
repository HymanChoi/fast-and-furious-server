import { ApiProperty } from '@nestjs/swagger';

class Driver {
  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '个人照' })
  photo: string;

  @ApiProperty({ description: '号码' })
  number: string;
}

export class CreateTeamDto {
  @ApiProperty({ description: 'ID' })
  readonly id: number;

  @ApiProperty({ description: '颜色' })
  color: string;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '图标' })
  logo: string;

  @ApiProperty({ description: '赛车图片' })
  car_img: string;

  @ApiProperty({ description: '全称' })
  full_name: string;

  @ApiProperty({ description: '基地位置' })
  base: string;

  @ApiProperty({ description: '赛车' })
  chassis: string;

  @ApiProperty({ description: '动力单元' })
  power_unit: string;

  @ApiProperty({ description: '首次参赛年份' })
  first_entry: string;

  @ApiProperty({ description: '世界冠军' })
  world_championships: string;

  @ApiProperty({ description: '最快圈速次数' })
  highest_race_finish: string;

  @ApiProperty({ description: '杆位次数' })
  pole_positions: string;

  @ApiProperty({
    type: () => String,
    isArray: true,
    description: '车队主管',
  })
  team_chief: string[];

  @ApiProperty({
    type: () => String,
    isArray: true,
    description: '技术主管',
  })
  technical_chief: string[];

  @ApiProperty({
    type: () => Driver,
    isArray: true,
    description: '车手',
  })
  drivers: Driver[];
}
