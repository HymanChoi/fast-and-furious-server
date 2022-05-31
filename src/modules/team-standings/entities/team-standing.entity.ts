import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('team_standings')
export class TeamStandingEntity {
  @PrimaryGeneratedColumn()
  year: string;

  @Column({ type: 'json', comment: '数据' })
  list: string;
}
