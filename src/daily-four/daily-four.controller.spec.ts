import { Test, TestingModule } from '@nestjs/testing';
import { DailyFourController } from './daily-four.controller';
import { DailyFourService } from './daily-four.service';
import { DailyFourDto } from './dto/daily-four.dto/daily-four.dto';

describe('DailyFourController', () => {
  let controller: DailyFourController;
  let service: DailyFourService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [DailyFourController],
      providers: [
        {
          provide: DailyFourService,
          useValue: {
            getAllData: jest.fn().mockReturnValue(['Product1', 'Product2']),
            getDataById: jest.fn().mockImplementation((id) => id),
            updateDataProduct: jest.fn().mockImplementation((id, data) => ({
              id,
              ...data,
            })),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<DailyFourController>(DailyFourController);
    service = moduleRef.get<DailyFourService>(DailyFourService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "hello world"', () => {
    const result = controller.getHelloWorld();
    expect(result).toEqual('hello world');
  });

  it('should return the correct product ID', () => {
    const result = controller.getHelloWorldById('2');
    expect(result).toEqual('2');
  });

  it('should call getAllData from service', () => {
    controller.getProduct();
    expect(service.getAllData).toHaveBeenCalled();
  });
});
