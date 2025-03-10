import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyOneModule } from './daily-one/daily-one.module';
import { ConfigModule } from '@nestjs/config';
import { DailTwoModule } from './dail-two/dail-two.module';
import { PrismaService } from './prisma/prisma.service';
import { DailyThreeModule } from './daily-three/daily-three.module';
import { DailyFourModule } from './daily-four/daily-four.module';
import { DailyFiveModule } from './daily-five/daily-five.module';
import { DailySixModule } from './daily-six/daily-six.module';
import { DailySevenModule } from './daily-seven/daily-seven.module';

@Module({
  imports: [
    DailyOneModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DailTwoModule,
    DailyThreeModule,
    DailyFourModule,
    DailyFiveModule,
    DailySixModule,
    DailySevenModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
