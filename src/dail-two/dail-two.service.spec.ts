import { Test, TestingModule } from '@nestjs/testing';
import { DailTwoService } from './dail-two.service';

describe('DailTwoService', () => {
  let service: DailTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailTwoService],
    }).compile();

    service = module.get<DailTwoService>(DailTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
