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
  Id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Age: number;

  @Column()
  Skill: number;

  @Column()
  Position: Position;

  @ManyToOne(type => Team, team => team.Players)
  Team: Team;
}
