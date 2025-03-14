import { Injectable } from '@nestjs/common';
import { CreateDailyNineDto } from './dto/create-daily-nine.dto';
import { UpdateDailyNineDto } from './dto/update-daily-nine.dto';

@Injectable()
export class DailyNineService {
  create(createDailyNineDto: CreateDailyNineDto) {
    return 'This action adds a new dailyNine';
  }

  findAll() {
    return `This action returns all dailyNine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyNine`;
  }

  update(id: number, updateDailyNineDto: UpdateDailyNineDto) {
    return `This action updates a #${id} dailyNine`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyNine`;
  }
}
