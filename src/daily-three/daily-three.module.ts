import { Module } from '@nestjs/common';
import { DailyThreeController } from './daily-three.controller';
import { DailyThreeService } from './daily-three.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DailyThreeController],
  providers: [DailyThreeService, PrismaService],
})
export class DailyThreeModule {}
