import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Player } from "src/player/player.entity";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @OneToMany(type => Player, player => player.Team)
  Players: Player[];
}
