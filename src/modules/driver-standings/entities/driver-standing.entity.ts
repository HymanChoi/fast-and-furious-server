import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('driver_standings')
export class DriverStandingEntity {
  @PrimaryGeneratedColumn()
  year: string;

  @Column({ type: 'json', comment: '数据' })
  list: string;
}
