import { Module } from '@nestjs/common';
import { DailyOneController } from './daily-one.controller';
import { DailyOneService } from './daily-one.service';

@Module({
  controllers: [DailyOneController],
  providers: [DailyOneService]
})
export class DailyOneModule {}
