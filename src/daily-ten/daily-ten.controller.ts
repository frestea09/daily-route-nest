import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyTenService } from './daily-ten.service';
import { CreateDailyTenDto } from './dto/create-daily-ten.dto';
import { UpdateDailyTenDto } from './dto/update-daily-ten.dto';

@Controller('daily-ten')
export class DailyTenController {
  constructor(private readonly dailyTenService: DailyTenService) {}

  @Post()
  create(@Body() createDailyTenDto: CreateDailyTenDto) {
    return this.dailyTenService.create(createDailyTenDto);
  }

  @Get()
  findAll() {
    return this.dailyTenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyTenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyTenDto: UpdateDailyTenDto) {
    return this.dailyTenService.update(+id, updateDailyTenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyTenService.remove(+id);
  }
}
