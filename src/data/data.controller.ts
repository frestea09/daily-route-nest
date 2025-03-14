import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { DataService } from './data.service';
import { DataDto } from './data-dto/data-dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}
  @Get()
  getData() {
    return this.dataService.getAllPosts();
  }
  @Get('temp')
  getDataTemp() {
    return this.dataService.getDataTemp();
  }
}
