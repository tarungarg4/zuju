import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournaments } from './tournaments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournaments])],
})
export class TournamentsModule {}
