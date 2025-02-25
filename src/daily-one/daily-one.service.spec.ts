import { Test, TestingModule } from '@nestjs/testing';
import { DailyOneService } from './daily-one.service';

describe('DailyOneService', () => {
  let service: DailyOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyOneService],
    }).compile();

    service = module.get<DailyOneService>(DailyOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
