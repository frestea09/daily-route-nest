import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyNineService } from './daily-nine.service';
import { CreateDailyNineDto } from './dto/create-daily-nine.dto';
import { UpdateDailyNineDto } from './dto/update-daily-nine.dto';

@Controller('daily-nine')
export class DailyNineController {
  constructor(private readonly dailyNineService: DailyNineService) {}

  @Post()
  create(@Body() createDailyNineDto: CreateDailyNineDto) {
    return this.dailyNineService.create(createDailyNineDto);
  }

  @Get()
  findAll() {
    return this.dailyNineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyNineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyNineDto: UpdateDailyNineDto) {
    return this.dailyNineService.update(+id, updateDailyNineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyNineService.remove(+id);
  }
}
