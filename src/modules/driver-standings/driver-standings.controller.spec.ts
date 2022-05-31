import { Test, TestingModule } from '@nestjs/testing';
import { DriverStandingsController } from './driver-standings.controller';
import { DriverStandingsService } from './driver-standings.service';

describe('DriverStandingsController', () => {
  let controller: DriverStandingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverStandingsController],
      providers: [DriverStandingsService],
    }).compile();

    controller = module.get<DriverStandingsController>(DriverStandingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
