import { Test, TestingModule } from '@nestjs/testing';
import { DailyThreeController } from './daily-three.controller';
import { DailyThreeService } from './daily-three.service';

describe('DailyThreeController', () => {
  let controller: DailyThreeController;
  let service: DailyThreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyThreeController],
      providers: [
        {
          provide: DailyThreeService,
          useValue: {
            getAllData: jest
              .fn()
              .mockResolvedValue([{ id: 1, name: 'Product 1' }]),
          },
        },
      ],
    }).compile();

    controller = module.get<DailyThreeController>(DailyThreeController);
    service = module.get<DailyThreeService>(DailyThreeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('is two work', () => {
    const result = controller.getDataAllTwo();
    expect(result).toEqual('hello world');
  });
  it('it reponse standar work', () => {
    const result = controller.getStandarResponse();
    expect(result).toEqual({
      status: 'success',
      message: 'data recive succesfully',
      data: {
        id: 1,
        name: 'sample data',
      },
    });
  });
  it('it response data given id ', () => {
    const id = 5;
    const result = controller.getProductId(id);
    expect(result).toEqual({
      status: 'success',
      message: `Data id : ${id}`,
      data: {
        id,
        name: `Sample Item ${id}`,
      },
    });
  });
  it('it update response data', () => {
    const result = controller.updateProduct();
    expect(result).toEqual({
      message: 'success',
    });
  });
});
