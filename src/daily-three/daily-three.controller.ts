import { Controller, Get, Param, Put } from '@nestjs/common';
import { DailyThreeService } from './daily-three.service';

@Controller('daily-three')
export class DailyThreeController {
  constructor(private readonly dailyThreeService: DailyThreeService) {}
  @Get()
  getDataAll() {
    return this.dailyThreeService.getAllData();
  }
  @Get('two')
  getDataAllTwo() {
    return 'hello world';
  }
  @Get('standar-response')
  getStandarResponse() {
    return {
      status: 'success',
      message: 'data recive succesfully',
      data: {
        id: 1,
        name: 'sample data',
      },
    };
  }
  @Get('/product/:id')
  getProductId(@Param('id') id: number) {
    return {
      status: 'success',
      message: `Data id : ${id}`,
      data: {
        id,
        name: `Sample Item ${id}`,
      },
    };
  }
  @Put()
  updateProduct() {
    return {
      message: 'success',
    };
  }
}
