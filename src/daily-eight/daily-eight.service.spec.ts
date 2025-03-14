import { Test, TestingModule } from '@nestjs/testing';
import { DailyEightService } from './daily-eight.service';

describe('DailyEightService', () => {
  let service: DailyEightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyEightService],
    }).compile();

    service = module.get<DailyEightService>(DailyEightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
