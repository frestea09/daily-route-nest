import { Injectable } from '@nestjs/common';
import { CreateDailySevenDto } from './dto/create-daily-seven.dto';
import { UpdateDailySevenDto } from './dto/update-daily-seven.dto';

@Injectable()
export class DailySevenService {
  create(createDailySevenDto: CreateDailySevenDto) {
    return 'This action adds a new dailySeven';
  }

  findAll() {
    return `This action returns all dailySeven`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailySeven`;
  }

  update(id: number, updateDailySevenDto: UpdateDailySevenDto) {
    return `This action updates a #${id} dailySeven`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailySeven`;
  }
}
