import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { DailyFiveService } from './daily-five.service';
import { DailyFiveDto } from './dto/daily-five-dto/daily-five-dto';
import { DailyFiveInterceptor } from './interceptor/daily-five/daily-five.interceptor';

@Controller('daily-five')
@UseInterceptors(DailyFiveInterceptor)
export class DailyFiveController {
  constructor(private readonly dailyFiveService: DailyFiveService) {}
  @Get()
  getProduction() {
    return this.dailyFiveService.getDataProduction();
  }
  @Get('interceptor')
  getInterceptro() {
    return { message: 'interceptor' };
  }
  @Get('product/:id')
  getProductionById(@Param('id') id: number) {
    return this.dailyFiveService.getDataProductById(id);
  }
  @Post('')
  createProduction(@Body() body: DailyFiveDto) {
    return this.dailyFiveService.createDataProduction(body);
  }
  @Put('product/:id')
  updateProduction(@Param('id') id: number, @Body() body: DailyFiveDto) {
    return this.dailyFiveService.updateDataProduction(Number(id), body);
  }
  @Delete('product/:id')
  deleteProduct(@Param('id') id: number) {
    return this.dailyFiveService.deteleDataProduction(Number(id));
  }
}
