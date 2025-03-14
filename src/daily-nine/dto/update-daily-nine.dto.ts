import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyNineDto } from './create-daily-nine.dto';

export class UpdateDailyNineDto extends PartialType(CreateDailyNineDto) {}
