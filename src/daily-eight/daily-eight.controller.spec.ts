import { Test, TestingModule } from '@nestjs/testing';
import { DailyEightController } from './daily-eight.controller';
import { DailyEightService } from './daily-eight.service';

describe('DailyEightController', () => {
  let controller: DailyEightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyEightController],
      providers: [DailyEightService],
    }).compile();

    controller = module.get<DailyEightController>(DailyEightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
