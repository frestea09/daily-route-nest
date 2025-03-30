import { Module } from '@nestjs/common';
import { DailyRouteController } from './daily-route.controller';
import { DailyRouteService } from './daily-route.service';

@Module({
  controllers: [DailyRouteController],
  providers: [DailyRouteService]
})
export class DailyRouteModule {}
