import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailySevenService } from './daily-seven.service';
import { CreateDailySevenDto } from './dto/create-daily-seven.dto';
import { UpdateDailySevenDto } from './dto/update-daily-seven.dto';

@Controller('daily-seven')
export class DailySevenController {
  constructor(private readonly dailySevenService: DailySevenService) {}

  @Post()
  create(@Body() createDailySevenDto: CreateDailySevenDto) {
    return this.dailySevenService.create(createDailySevenDto);
  }

  @Get()
  findAll() {
    return this.dailySevenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailySevenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailySevenDto: UpdateDailySevenDto) {
    return this.dailySevenService.update(+id, updateDailySevenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailySevenService.remove(+id);
  }
}
