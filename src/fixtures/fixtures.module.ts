import { Module, forwardRef } from '@nestjs/common';
import { FixturesController } from './fixtures.controller';
import { FixturesService } from './fixtures.service';
import { Fixtures } from './fixtures.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fixtures])],
  controllers: [FixturesController],
  providers: [FixturesService],
  exports: [FixturesService],
})
export class FixturesModule {}
