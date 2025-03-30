import { Test, TestingModule } from '@nestjs/testing';
import { DailyRouteService } from './daily-route.service';

describe('Daily Route service', () => {
  let dailyRouteService: DailyRouteService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyRouteService],
    }).compile();
    dailyRouteService = module.get(DailyRouteService);
  });
  it('is hello world work', () => {
    expect(dailyRouteService.sayHelloWorld()).toBe('hello world');
  });
});
