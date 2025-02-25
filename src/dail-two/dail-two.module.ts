import { Module } from '@nestjs/common';
import { DailTwoController } from './dail-two.controller';
import { DailTwoService } from './dail-two.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DailTwoController],
  providers: [DailTwoService, PrismaService],
})
export class DailTwoModule {}
