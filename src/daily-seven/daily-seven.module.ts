import { Module } from '@nestjs/common';
import { DailySevenService } from './daily-seven.service';
import { DailySevenController } from './daily-seven.controller';

@Module({
  controllers: [DailySevenController],
  providers: [DailySevenService],
})
export class DailySevenModule {}
