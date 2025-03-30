import { Test, TestingModule } from '@nestjs/testing';
import { DailyTenService } from './daily-ten.service';

describe('DailyTenService', () => {
  let service: DailyTenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyTenService],
    }).compile();

    service = module.get<DailyTenService>(DailyTenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
