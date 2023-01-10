import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNumberString,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class FixturesFilterDto {
  @IsPositive()
  limit: number;
  @IsInt()
  offset: number;
  @IsDateString()
  startDate: string;
  @IsPositive()
  @IsOptional()
  tournamentId?: number;
  @IsPositive()
  @IsOptional()
  teamId?: number;
}

export class FixturesFetchRequest implements Partial<FixturesFilterDto> {
  @ApiProperty()
  @IsOptional()
  limit?: number;
  @ApiProperty()
  @IsOptional()
  offset?: number;
  @ApiProperty()
  @IsOptional()
  startDate?: string;
  @ApiProperty()
  @IsOptional()
  tournamentId?: number;
  @ApiProperty()
  @IsOptional()
  teamId?: number;
}

export class CalendarRequestDto {
  @ApiProperty()
  @IsPositive()
  month: number;

  @ApiProperty()
  @IsPositive()
  year: number;

  @ApiProperty({ required: false })
  @IsPositive()
  @IsOptional()
  tournamentId?: number;

  @ApiProperty({ required: false })
  @IsPositive()
  @IsOptional()
  teamId?: number;
}

export class GameDatesDto {
  @ApiProperty({ type: [String] })
  gameDates: string[];
}

export class CalendarResponseDto {
  @ApiProperty({ type: GameDatesDto })
  data: GameDatesDto;
}
