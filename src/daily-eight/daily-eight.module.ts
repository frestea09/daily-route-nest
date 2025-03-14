import { Module } from '@nestjs/common';
import { DailyEightService } from './daily-eight.service';
import { DailyEightController } from './daily-eight.controller';

@Module({
  controllers: [DailyEightController],
  providers: [DailyEightService],
})
export class DailyEightModule {}
