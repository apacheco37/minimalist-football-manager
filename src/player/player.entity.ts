import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Team } from 'src/team/team.entity';

enum Position {
  GK = 'GK',
  DFL = 'DFL',
  DFC = 'DFC',
  DFR = 'DFR',
  ML = 'ML',
  MC = 'MC',
  MR = 'MR',
  FL = 'FL',
  FC = 'FC',
  FR = 'FR',
}

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  skill: number;

  @Column()
  position: Position;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Team, team => team.players)
  team: Team;
}
