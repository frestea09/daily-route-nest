import { Injectable } from '@nestjs/common';
import { CreateDailyEightDto } from './dto/create-daily-eight.dto';
import { UpdateDailyEightDto } from './dto/update-daily-eight.dto';

@Injectable()
export class DailyEightService {
  create(createDailyEightDto: CreateDailyEightDto) {
    return createDailyEightDto;
  }

  findAll() {
    return `This action returns all `;
  }

  findOne(id: string) {
    return `This action returns a #${id} dailyEight`;
  }

  update(id: number, updateDailyEightDto: UpdateDailyEightDto) {
    return `This action updates a #${id} dailyEight`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyEight`;
  }
}
