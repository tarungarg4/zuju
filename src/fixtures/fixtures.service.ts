import { Injectable } from '@nestjs/common';
import { Fixtures } from './fixtures.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FixturesFilterDto } from './fixtures.dto';

@Injectable()
export class FixturesService {
  private readonly fixtures_table = 'fixtures';
  constructor(
    @InjectRepository(Fixtures)
    private fixturesRepository: Repository<Fixtures>,
  ) {}

  async getGames(filters: FixturesFilterDto): Promise<Fixtures[]> {
    const { startDate, tournamentId, teamId, limit, offset } = filters;
    const query = this.fixturesRepository
      .createQueryBuilder(this.fixtures_table)
      .innerJoin('fixtures.homeTeam', 'homeTeam')
      .innerJoin('fixtures.awayTeam', 'awayTeam')
      .innerJoin('fixtures.tournament', 'tournament')
      .where('startTime >= :startTime', { startTime: new Date(startDate) });

    if (tournamentId) {
      query.andWhere('tournamentId = :tournamentId', { tournamentId });
    }
    if (teamId) {
      query.andWhere('(homeTeamId = :homeTeamId OR awayTeamId = :awayTeamId)', {
        homeTeamId: teamId,
        awayTeamId: teamId,
      });
    }
    return await query.skip(offset).take(limit).getMany();
  }

  async getGameDays(
    month: number,
    year: number,
    tournamentId?: number,
    teamId?: number,
  ): Promise<string[]> {
    const query = this.fixturesRepository
      .createQueryBuilder(this.fixtures_table)
      .select(['startTime'])
      .where('startTime >= :monthStart AND startTime<= :monthEnd', {
        monthstart: new Date(year, month, 1),
        monthEnd: new Date(year, month, 0),
      });

    if (tournamentId) {
      query.andWhere('tournamentId = :tournamentId', { tournamentId });
    }
    if (teamId) {
      query.andWhere('(homeTeamId = :homeTeamId OR awayTeamId = :awayTeamId)', {
        homeTeamId: teamId,
        awayTeamId: teamId,
      });
    }
    const dates = await query.getMany();

    return dates.map((date) => {
      return date.startTime.toDateString();
    });
  }
}
