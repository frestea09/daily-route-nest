import { Module } from '@nestjs/common';
import { DailyFiveController } from './daily-five.controller';
import { DailyFiveService } from './daily-five.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DailyFiveController],
  providers: [DailyFiveService, PrismaService],
})
export class DailyFiveModule {}
