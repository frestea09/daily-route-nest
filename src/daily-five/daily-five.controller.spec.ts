import { Test, TestingModule } from '@nestjs/testing';
import { DailyFiveController } from './daily-five.controller';

describe('DailyFiveController', () => {
  let controller: DailyFiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyFiveController],
    }).compile();

    controller = module.get<DailyFiveController>(DailyFiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
