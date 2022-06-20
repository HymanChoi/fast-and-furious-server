import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class TeamDriversItem {
  @Column({ type: 'text', comment: '名称' })
  name: string;

  @Column({ type: 'text', comment: '个人照' })
  photo: string;

  @Column({ type: 'text', comment: '号码' })
  number: string;
}

@Entity('teams')
export class TeamEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: 'ID' })
  id: number;

  @Column({ type: 'text', comment: '颜色' })
  color: string;

  @Column({ type: 'text', comment: '名称' })
  name: string;

  @Column({ type: 'text', comment: '图标' })
  logo: string;

  @Column({ type: 'text', comment: '赛车图片' })
  car_img: string;

  @Column({ type: 'text', comment: '全称' })
  full_name: string;

  @Column({ type: 'text', comment: '基地位置' })
  base: string;

  @Column({ type: 'text', comment: '赛车' })
  chassis: string;

  @Column({ type: 'text', comment: '动力单元' })
  power_unit: string;

  @Column({ type: 'text', comment: '首次参赛年份' })
  first_entry: string;

  @Column({ type: 'text', comment: '世界冠军' })
  world_championships: string;

  @Column({ type: 'text', comment: '最快圈速次数' })
  highest_race_finish: string;

  @Column({ type: 'text', comment: '杆位次数' })
  pole_positions: string;

  @Column({ type: 'json', comment: '车队主管' })
  team_chief: string[];

  @Column({ type: 'json', comment: '技术主管' })
  technical_chief: string[];

  @Column({ type: 'json', comment: '车手' })
  drivers: TeamDriversItem[];
}
