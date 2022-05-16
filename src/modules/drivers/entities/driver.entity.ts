import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('drivers')
export class DriversEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  first_name: string;

  @Column('text')
  last_name: string;

  @Column('text')
  birth_date: string;

  @Column('text')
  age: string;

  @Column('text')
  date_of_birth: string;

  @Column('text')
  nationality: string;

  @Column('text')
  country: string;

  @Column('text')
  icn_flag_img: string;

  @Column('text')
  place_of_birth: string;

  @Column('text')
  driver_number: string;

  @Column('text')
  team: string;

  @Column('text')
  avatar: string;

  @Column('text')
  img: string;

  @Column('text')
  podiums: string;

  @Column('text')
  points: string;

  @Column('text')
  grands_prix_entered: string;

  @Column('text')
  world_championships: string;

  @Column('text')
  highest_race_finish: string;

  @Column('text')
  highest_grid_position: string;

  @Column('json')
  wins_list: string;

  @Column('json')
  pole_positions_list: string;

  @Column('json')
  teams: string;
}
