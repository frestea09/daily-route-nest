import { Test, TestingModule } from '@nestjs/testing';
import { DailyFiveService } from './daily-five.service';

describe('DailyFiveService', () => {
  let service: DailyFiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyFiveService],
    }).compile();

    service = module.get<DailyFiveService>(DailyFiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
