import { Module } from '@nestjs/common';
import { DailyTenService } from './daily-ten.service';
import { DailyTenController } from './daily-ten.controller';

@Module({
  controllers: [DailyTenController],
  providers: [DailyTenService],
})
export class DailyTenModule {}
