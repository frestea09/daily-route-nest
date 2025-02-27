import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyOneModule } from './daily-one/daily-one.module';
import { ConfigModule } from '@nestjs/config';
import { DailTwoModule } from './dail-two/dail-two.module';
import { PrismaService } from './prisma/prisma.service';
import { DailyThreeModule } from './daily-three/daily-three.module';

@Module({
  imports: [
    DailyOneModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DailTwoModule,
    DailyThreeModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
