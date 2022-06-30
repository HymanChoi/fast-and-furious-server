import { ApiProperty } from '@nestjs/swagger';

class DriverWinsListItem {
  @ApiProperty({ description: 'ID' })
  id: string;

  @ApiProperty({ description: '车队' })
  team: string;

  @ApiProperty({ description: '赛事' })
  event: string;

  @ApiProperty({ description: '轮次' })
  round: string;
}

class DriverPolePositionsListItem extends DriverWinsListItem {}

class DriverTeamsItem {
  @ApiProperty({ description: '车队名称' })
  team: string;

  @ApiProperty({ description: '赛季' })
  season: string;

  @ApiProperty({ description: '队友' })
  teammate: string[];
}

export class CreateDriverDto {
  @ApiProperty({ description: 'ID' })
  id: number;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '名' })
  first_name: string;

  @ApiProperty({ description: '姓' })
  last_name: string;

  @ApiProperty({ description: '出生日期' })
  birth_date: string;

  @ApiProperty({ description: '年龄' })
  age: string;

  @ApiProperty({ description: '国籍' })
  nationality: string;

  @ApiProperty({
    type: () => DriverWinsListItem,
    isArray: true,
    description: '获胜信息列表',
  })
  wins_list: DriverWinsListItem[];

  @ApiProperty({
    type: () => DriverPolePositionsListItem,
    isArray: true,
    description: '杆位信息列表',
  })
  pole_positions_list: DriverPolePositionsListItem[];

  @ApiProperty({
    type: () => DriverTeamsItem,
    isArray: true,
    description: '生涯效力车队',
  })
  teams: DriverTeamsItem[];

  @ApiProperty({ description: '' })
  wins: string;

  @ApiProperty({ description: '登上领奖台次数' })
  podiums: string;

  @ApiProperty({ description: '' })
  pole_positions: string;

  @ApiProperty({ description: '' })
  championships: string;

  @ApiProperty({ description: '' })
  best_result: string;

  @ApiProperty({ description: '' })
  best_grid_position: string;

  @ApiProperty({ description: '' })
  seasons: string;

  @ApiProperty({ description: '' })
  events: string;

  @ApiProperty({ description: '' })
  starts: string;

  @ApiProperty({ description: '累计获得分数' })
  points: string;

  @ApiProperty({ description: '' })
  laps_raced: string;

  @ApiProperty({ description: '' })
  laps_led: string;

  @ApiProperty({ description: '' })
  fastest_laps: string;

  @ApiProperty({ description: '' })
  retirements: string;

  /**
   * 官网数据
   */
  @ApiProperty({ description: '国家' })
  country: string;

  @ApiProperty({ description: '国旗图片' })
  icn_flag_img: string;

  @ApiProperty({ description: '出生地点' })
  place_of_birth: string;

  @ApiProperty({ description: '号码' })
  driver_number: string;

  @ApiProperty({ description: '当前车队' })
  team: string;

  @ApiProperty({ description: '头像' })
  avatar: string;

  @ApiProperty({ description: '个人照' })
  img: string;

  @ApiProperty({ description: '进入大奖赛次数' })
  grands_prix_entered: string;

  @ApiProperty({ description: '总冠军次数' })
  world_championships: string;

  @ApiProperty({ description: '最快圈速' })
  highest_race_finish: string;

  @ApiProperty({ description: '最好名次' })
  highest_grid_position: string;
}
