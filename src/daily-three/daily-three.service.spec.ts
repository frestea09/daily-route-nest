import { Test, TestingModule } from '@nestjs/testing';
import { DailyThreeService } from './daily-three.service';

describe('DailyThreeService', () => {
  let service: DailyThreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyThreeService],
    }).compile();

    service = module.get<DailyThreeService>(DailyThreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
