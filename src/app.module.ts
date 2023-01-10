import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { FixturesModule } from './fixtures/fixtures.module';
import { InfraModule } from './infra/infra.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './infra/typeorm.service';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useExisting: TypeOrmConfigService,
      imports: [InfraModule],
    }),
    TeamsModule,
    FixturesModule,
    InfraModule,
    TournamentsModule,
  ],
})
export class AppModule {}
