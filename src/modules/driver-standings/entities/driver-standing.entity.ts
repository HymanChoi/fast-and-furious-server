import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class DriverStandingListItem {
  @Column({ type: 'text', comment: '排名' })
  position: string;

  @Column({ type: 'text', comment: '车手名称' })
  driver: string;

  @Column({ type: 'text', comment: '国籍' })
  nationality: string;

  @Column({ type: 'text', comment: '车队名称' })
  car: string;

  @Column({ type: 'text', comment: '分数' })
  points: string;
}

@Entity('driver_standings')
export class DriverStandingEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: '年份' })
  year: number;

  @Column({ type: 'json', comment: '数据' })
  list: DriverStandingListItem[];
}
