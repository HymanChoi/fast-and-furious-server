import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class TeamsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  color: string;

  @Column('text')
  name: string;

  @Column('text')
  logo: string;

  @Column('text')
  car_img: string;

  @Column('text')
  full_name: string;

  @Column('text')
  base: string;

  @Column('text')
  chassis: string;

  @Column('text')
  power_unit: string;

  @Column('text')
  first_entry: string;

  @Column('text')
  world_championships: string;

  @Column('text')
  highest_race_finish: string;

  @Column('text')
  pole_positions: string;

  @Column('json')
  team_chief: string;

  @Column('json')
  technical_chief: string;

  @Column('json')
  drivers: string;
}
