import { Test, TestingModule } from '@nestjs/testing';
import { DailyOneController } from './daily-one.controller';

describe('DailyOneController', () => {
  let controller: DailyOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyOneController],
    }).compile();

    controller = module.get<DailyOneController>(DailyOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
