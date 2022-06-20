import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedules')
export class SchedulesEntity {
  @PrimaryGeneratedColumn({ type: 'int', comment: 'ID' })
  id: number;

  @Column({ type: 'text', comment: '站次' })
  round: string;

  @Column({ type: 'text', comment: '年份' })
  year: string;

  @Column({ type: 'text', comment: '月份' })
  month: string;

  @Column({ type: 'text', comment: '日期开始时间' })
  start_date: string;

  @Column({ type: 'text', comment: '日期结束时间' })
  end_date: string;

  @Column({ type: 'text', comment: '位置' })
  event_place: string;

  @Column({ type: 'text', comment: '标题' })
  event_title: string;

  @Column({ type: 'text', comment: '国旗图片' })
  country_flag_img: string;

  @Column({ type: 'text', comment: '赛道图片' })
  circuit_img: string;
}
