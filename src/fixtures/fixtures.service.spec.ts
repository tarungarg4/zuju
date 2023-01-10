import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mockify } from '../../test/mockify.types';
import { Fixtures } from './fixtures.entity';
import { FixturesService } from './fixtures.service';

const mockFixtures: Mockify<Repository<Fixtures>> = {
  createQueryBuilder: jest.fn((entity) => entity),
};

describe('FixturesService', () => {
  let service: FixturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FixturesService,
        { provide: getRepositoryToken(Fixtures), useValue: mockFixtures },
      ],
    }).compile();

    service = module.get<FixturesService>(FixturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
