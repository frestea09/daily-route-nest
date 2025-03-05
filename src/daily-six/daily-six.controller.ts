import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailySixService } from './daily-six.service';
import { CreateDailySixDto } from './dto/create-daily-six.dto';
import { UpdateDailySixDto } from './dto/update-daily-six.dto';

@Controller('daily-six')
export class DailySixController {
  constructor(private readonly dailySixService: DailySixService) {}

  @Post()
  create(@Body() createDailySixDto: CreateDailySixDto) {
    return this.dailySixService.create(createDailySixDto);
  }

  @Get()
  findAll() {
    return this.dailySixService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailySixService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailySixDto: UpdateDailySixDto) {
    return this.dailySixService.update(+id, updateDailySixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailySixService.remove(+id);
  }
}
