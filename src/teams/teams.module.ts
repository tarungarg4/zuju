import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teams } from './teams.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teams])],
})
export class TeamsModule {}
