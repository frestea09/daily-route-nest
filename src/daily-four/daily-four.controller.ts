import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DailyFourService } from './daily-four.service';
import { DailyFourDto } from './dto/daily-four.dto/daily-four.dto';

@Controller('daily-four')
export class DailyFourController {
  constructor(private readonly dailyFourService: DailyFourService) {}
  @Get('hello-world')
  getHelloWorld() {
    return 'hello world';
  }
  @Get('product')
  getProduct() {
    return this.dailyFourService.getAllData();
  }
  @Get('/product/:id')
  getHelloWorldById(@Param('id') id: string) {
    return id;
  }
  @Post('/product')
  createProduct(@Body() body: DailyFourDto) {
    return this.dailyFourService.createDataProduct(body);
  }
  @Put('/product/:id')
  putProduct(@Param('id') id: number, @Body() body: DailyFourDto) {
    return this.dailyFourService.updateDataProduct(id, body);
  }
  @Delete('/product/:id')
  deleteProduct(@Param('id') id: number) {
    return this.dailyFourService.deleteDataProduct(id);
  }
}
