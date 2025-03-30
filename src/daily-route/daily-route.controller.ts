import { Controller, Get } from '@nestjs/common';
import { DailyRouteService } from './daily-route.service';

@Controller('daily-route')
export class DailyRouteController {
  constructor(private readonly dailyRouteService: DailyRouteService) {}
  @Get()
  sayHelloWorld() {
    this.dailyRouteService.sayHelloWorld();
  }
}
