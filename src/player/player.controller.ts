import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';

import { PlayerService } from './player.service';
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) { }

  @Get()
  getPlayers(): Promise<Player[]> {
    return this.playerService.getPlayers();
  }

  @Get(':id')
  getPlayer(@Param('id') id: number): Promise<Player> {
    return this.playerService.getPlayer(id);
  }

  @Post()
  createPlayer(@Body() player: Player): Promise<Player> {
    return this.playerService.createPlayer(player);
  }

  @Put()
  updatePlayer(@Body() player: Player): Promise<Player> {
    return this.playerService.updatePlayer(player);
  }

  @Delete(':id')
  deletePlayer(@Param('id') id: number) {
    return this.playerService.deletePlayer(id);
  }
}
