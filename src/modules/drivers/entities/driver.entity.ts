import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class DriverWinsListItem {
  @Column({ type: 'text', comment: 'ID' })
  id: string;

  @Column({ type: 'text', comment: '车队' })
  team: string;

  @Column({ type: 'text', comment: '赛事' })
  event: string;

  @Column({ type: 'text', comment: '轮次' })
  round: string;
}

class DriverPolePositionsListItem extends DriverWinsListItem {}

class DriverTeamsItem {
  @Column({ type: 'text', comment: '车队名称' })
  team: string;

  @Column({ type: 'text', comment: '赛季' })
  season: string;

  @Column({ type: 'json', comment: '队友' })
  teammate: string[];
}

@Entity('drivers')
export class DriverEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: 'ID' })
  id: number;

  @Column({ type: 'text', comment: '名称' })
  name: string;

  @Column({ type: 'text', comment: '名' })
  first_name: string;

  @Column({ type: 'text', comment: '姓' })
  last_name: string;

  @Column({ type: 'text', comment: '出生日期' })
  birth_date: string;

  @Column({ type: 'text', comment: '年龄' })
  age: string;

  @Column({ type: 'text', comment: '国籍' })
  nationality: string;

  @Column({ type: 'text', comment: '国家' })
  country: string;

  @Column({ type: 'text', comment: '国旗图片' })
  icn_flag_img: string;

  @Column({ type: 'text', comment: '出生地点' })
  place_of_birth: string;

  @Column({ type: 'text', comment: '号码' })
  driver_number: string;

  @Column({ type: 'text', comment: '当前车队' })
  team: string;

  @Column({ type: 'text', comment: '头像' })
  avatar: string;

  @Column({ type: 'text', comment: '个人照' })
  img: string;

  @Column({ type: 'text', comment: '登上领奖台次数' })
  podiums: string;

  @Column({ type: 'text', comment: '累计获得分数' })
  points: string;

  @Column({ type: 'text', comment: '进入大奖赛次数' })
  grands_prix_entered: string;

  @Column({ type: 'text', comment: '总冠军次数' })
  world_championships: string;

  @Column({ type: 'text', comment: '最快圈速' })
  highest_race_finish: string;

  @Column({ type: 'text', comment: '最好名次' })
  highest_grid_position: string;

  @Column({ type: 'json', comment: '获胜信息列表' })
  wins_list: DriverWinsListItem[];

  @Column({ type: 'json', comment: '杆位信息列表' })
  pole_positions_list: DriverPolePositionsListItem[];

  @Column({ type: 'json', comment: '生涯效力车队' })
  teams: DriverTeamsItem[];
}
