import { Test, TestingModule } from '@nestjs/testing';
import { Mockify } from '../../test/mockify.types';
import { FixturesController } from './fixtures.controller';
import { FixturesService } from './fixtures.service';

const mockFixturesService: Mockify<FixturesService> = {
  getGameDays: jest.fn(),
  getGames: jest.fn(),
};

describe('FixturesController', () => {
  let controller: FixturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FixturesController,
        {
          provide: FixturesService,
          useValue: mockFixturesService,
        },
      ],
    }).compile();

    controller = module.get<FixturesController>(FixturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
