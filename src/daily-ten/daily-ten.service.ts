import { Injectable } from '@nestjs/common';
import { CreateDailyTenDto } from './dto/create-daily-ten.dto';
import { UpdateDailyTenDto } from './dto/update-daily-ten.dto';

@Injectable()
export class DailyTenService {
  create(createDailyTenDto: CreateDailyTenDto) {
    return 'This action adds a new dailyTen';
  }

  findAll() {
    return `This action returns all dailyTen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyTen`;
  }

  update(id: number, updateDailyTenDto: UpdateDailyTenDto) {
    return `This action updates a #${id} dailyTen`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyTen`;
  }
}
