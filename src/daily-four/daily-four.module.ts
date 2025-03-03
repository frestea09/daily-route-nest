import { Module } from '@nestjs/common';
import { DailyFourController } from './daily-four.controller';
import { DailyFourService } from './daily-four.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DailyFourController],
  providers: [DailyFourService, PrismaService],
})
export class DailyFourModule {}
