import { Test, TestingModule } from '@nestjs/testing';
import { DailyNineService } from './daily-nine.service';

describe('DailyNineService', () => {
  let service: DailyNineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyNineService],
    }).compile();

    service = module.get<DailyNineService>(DailyNineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
