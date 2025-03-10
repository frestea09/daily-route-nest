import { Test, TestingModule } from '@nestjs/testing';
import { DailySevenController } from './daily-seven.controller';
import { DailySevenService } from './daily-seven.service';

describe('DailySevenController', () => {
  let controller: DailySevenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailySevenController],
      providers: [DailySevenService],
    }).compile();

    controller = module.get<DailySevenController>(DailySevenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
