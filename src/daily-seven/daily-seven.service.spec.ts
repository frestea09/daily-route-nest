import { Test, TestingModule } from '@nestjs/testing';
import { DailySevenService } from './daily-seven.service';

describe('DailySevenService', () => {
  let service: DailySevenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailySevenService],
    }).compile();

    service = module.get<DailySevenService>(DailySevenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
