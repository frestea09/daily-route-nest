import { Test, TestingModule } from '@nestjs/testing';
import { DailyTenController } from './daily-ten.controller';
import { DailyTenService } from './daily-ten.service';

describe('DailyTenController', () => {
  let controller: DailyTenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyTenController],
      providers: [DailyTenService],
    }).compile();

    controller = module.get<DailyTenController>(DailyTenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
