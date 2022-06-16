import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class Team {
  @Column({ type: 'text', comment: '车队名称' })
  team: string;

  @Column({ type: 'text', comment: '分数' })
  points: string;

  @Column({ type: 'text', comment: '排名' })
  position: string;
}

@Entity('team_standings')
export class TeamStandingEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: '年份' })
  year: number;

  @Column({ type: 'json', comment: '数据' })
  list: Team[];
}
