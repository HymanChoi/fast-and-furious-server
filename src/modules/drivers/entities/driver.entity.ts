import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drivers')
export class DriversEntity {
  @PrimaryGeneratedColumn()
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

  @Column('text')
  highest_race_finish: string;

  @Column('text')
  highest_grid_position: string;

  @Column('json')
  wins_list: string;

  @Column('json')
  pole_positions_list: string;

  @Column({ type: 'json', comment: '生涯效力车队' })
  teams: string;
}
