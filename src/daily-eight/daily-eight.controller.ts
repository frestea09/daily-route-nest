import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DailyEightService } from './daily-eight.service';
import {
  CreateDailyEightDto,
  DailEightDto,
} from './dto/create-daily-eight.dto';
import { UpdateDailyEightDto } from './dto/update-daily-eight.dto';

@Controller('daily-eight')
export class DailyEightController {
  constructor(private readonly dailyEightService: DailyEightService) {}

  @Get(':id')
  findOne(@Param() params: DailEightDto) {
    return this.dailyEightService.findOne(params.id);
  }
  @Post()
  create(@Body() createDailyEightDto: CreateDailyEightDto) {
    return this.dailyEightService.create(createDailyEightDto);
  }

  @Get()
  findAll() {
    return this.dailyEightService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyEightDto: UpdateDailyEightDto,
  ) {
    return this.dailyEightService.update(+id, updateDailyEightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyEightService.remove(+id);
  }
}
