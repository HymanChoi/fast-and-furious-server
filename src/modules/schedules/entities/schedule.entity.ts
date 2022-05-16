import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedules')
export class SchedulesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  round: string;

  @Column('text')
  year: string;

  @Column('text')
  month: string;

  @Column('text')
  start_date: string;

  @Column('text')
  end_date: string;

  @Column('text')
  event_place: string;

  @Column('text')
  event_title: string;

  @Column('text')
  country_flag_img: string;
}
