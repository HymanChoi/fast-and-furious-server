import { Test, TestingModule } from '@nestjs/testing';
import { TeamStandingsController } from './team-standings.controller';
import { TeamStandingsService } from './team-standings.service';

describe('TeamStandingsController', () => {
  let controller: TeamStandingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamStandingsController],
      providers: [TeamStandingsService],
    }).compile();

    controller = module.get<TeamStandingsController>(TeamStandingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
