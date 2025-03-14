import { Module } from '@nestjs/common';
import { DailyNineService } from './daily-nine.service';
import { DailyNineController } from './daily-nine.controller';

@Module({
  controllers: [DailyNineController],
  providers: [DailyNineService],
})
export class DailyNineModule {}
