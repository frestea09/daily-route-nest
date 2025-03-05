import { Test, TestingModule } from '@nestjs/testing';
import { DailySixController } from './daily-six.controller';
import { DailySixService } from './daily-six.service';

describe('DailySixController', () => {
  let controller: DailySixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailySixController],
      providers: [DailySixService],
    }).compile();

    controller = module.get<DailySixController>(DailySixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
