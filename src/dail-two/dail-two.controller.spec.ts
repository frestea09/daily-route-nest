import { Test, TestingModule } from '@nestjs/testing';
import { DailTwoController } from './dail-two.controller';

describe('DailTwoController', () => {
  let controller: DailTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailTwoController],
    }).compile();

    controller = module.get<DailTwoController>(DailTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
