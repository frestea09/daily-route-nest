import { Module } from '@nestjs/common';
import { DailySixService } from './daily-six.service';
import { DailySixController } from './daily-six.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DailySixController],
  providers: [DailySixService, PrismaService],
})
export class DailySixModule {}
