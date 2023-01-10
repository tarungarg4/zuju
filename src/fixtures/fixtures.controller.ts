import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FixturesService } from './fixtures.service';
import {
  CalendarRequestDto,
  CalendarResponseDto,
  FixturesFetchRequest,
} from './fixtures.dto';
import { Fixtures } from './fixtures.entity';

@ApiTags('Fixtures')
@Controller('v1/fixtures')
export class FixturesController {
  constructor(private readonly fixturesService: FixturesService) {}

  @Get('listings')
  @ApiQuery({ name: 'tournamentId', type: Number, required: false })
  @ApiQuery({ name: 'teamId', type: Number, required: false })
  @ApiQuery({ name: 'startDate', type: String, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'offset', type: Number, required: false })
  @ApiOkResponse({ type: [Fixtures] })
  async getListings(
    @Query() params: FixturesFetchRequest,
  ): Promise<Fixtures[]> {
    let filters = {
      limit: params.limit ?? 10,
      offset: params.offset ?? 0,
      startDate: params.startDate ?? new Date().toISOString().slice(0, 10),
      tournamentId: params?.tournamentId,
      teamId: params?.teamId,
    };

    return this.fixturesService.getGames(filters);
  }

  @Get('calendar')
  @ApiQuery({ name: 'month', type: Number })
  @ApiQuery({ name: 'year', type: Number })
  @ApiQuery({ name: 'tournamentId', type: Number, required: false })
  @ApiQuery({ name: 'teamId', type: Number, required: false })
  @ApiOkResponse({ type: CalendarResponseDto })
  async getCalendar(
    @Query() params: CalendarRequestDto,
  ): Promise<CalendarResponseDto> {
    const { month, year, tournamentId, teamId } = params;
    let gameDates = await this.fixturesService.getGameDays(
      month,
      year,
      tournamentId,
      teamId,
    );
    return { data: { gameDates } };
  }
}
