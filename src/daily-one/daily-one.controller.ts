import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DailyOneService } from './daily-one.service';

@Controller('daily-one')
export class DailyOneController {
  constructor(private readonly dailyServiceOne: DailyOneService) {}
  @Get('say-hello')
  sayHelloWorld() {
    return {
      message: 'hello world',
    };
  }
  @Get('say-hello/:id')
  getProductionId(@Param('id') id: string) {
    return id;
  }
  @Post()
  createProdcution(@Body() body: { name: string; email: string }) {
    return { name: body.name, email: body.email };
  }
  @Put(':id')
  putProduction(
    @Param('id') id: string,
    @Body() body: { name: string; email: string },
  ) {
    return { id: id, name: body.name, email: body.email };
  }
  @Delete(':id')
  deleteProduction(@Param('id') id: string) {
    return id;
  }
}
