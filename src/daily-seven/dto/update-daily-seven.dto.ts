import { PartialType } from '@nestjs/mapped-types';
import { CreateDailySevenDto } from './create-daily-seven.dto';

export class UpdateDailySevenDto extends PartialType(CreateDailySevenDto) {}
