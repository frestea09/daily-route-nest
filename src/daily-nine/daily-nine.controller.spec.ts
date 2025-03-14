import { Test, TestingModule } from '@nestjs/testing';
import { DailyNineController } from './daily-nine.controller';
import { DailyNineService } from './daily-nine.service';

describe('DailyNineController', () => {
  let controller: DailyNineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyNineController],
      providers: [DailyNineService],
    }).compile();

    controller = module.get<DailyNineController>(DailyNineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
