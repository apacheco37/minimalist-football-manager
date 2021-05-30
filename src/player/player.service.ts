import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) { }

  getPlayer(id: number): Promise<Player> {
    return this.playerRepository.findOne(id, {
      relations: ['team'],
    });
  }

  getPlayers(): Promise<Player[]> {
    return this.playerRepository.find({
      relations: ['team'],
    });
  }

  createPlayer(player: Player): Promise<Player> {
    return this.playerRepository.save(player);
  }

  updatePlayer(player: Player): Promise<Player> {
    const playerInDb = this.getPlayer(player.id);
    if (playerInDb) {
      return this.playerRepository.save(player);
    }
  }

  async deletePlayer(id: number): Promise<Player> {
    const playerInDb = await this.getPlayer(id);
    if (playerInDb) {
      return this.playerRepository.remove(playerInDb);
    }
  }
}
