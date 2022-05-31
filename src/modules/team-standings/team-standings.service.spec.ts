import { Test, TestingModule } from '@nestjs/testing';
import { TeamStandingsService } from './team-standings.service';

describe('TeamStandingsService', () => {
  let service: TeamStandingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamStandingsService],
    }).compile();

    service = module.get<TeamStandingsService>(TeamStandingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
