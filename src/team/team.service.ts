import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) { }

  getTeam(id: number): Promise<Team> {
    return this.teamRepository.findOne(id, {
      relations: ['players'],
    });
  }

  getTeams(): Promise<Team[]> {
    return this.teamRepository.find({
      relations: ['players'],
    });
  }

  createTeam(team: Team): Promise<Team> {
    return this.teamRepository.save(team);
  }

  updateTeam(team: Team): Promise<Team> {
    const teamInDb = this.getTeam(team.id);
    if (teamInDb) {
      return this.teamRepository.save(team);
    }
  }

  async deleteTeam(id: number): Promise<Team> {
    const teamInDb = await this.getTeam(id);
    if (teamInDb) {
      return this.teamRepository.remove(teamInDb);
    }
  }
}
