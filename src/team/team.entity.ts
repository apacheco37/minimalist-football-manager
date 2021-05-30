import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Player } from 'src/player/player.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany(type => Player, player => player.team)
  players: Player[];
}
