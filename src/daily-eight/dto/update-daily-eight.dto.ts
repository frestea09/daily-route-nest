import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyEightDto } from './create-daily-eight.dto';

export class UpdateDailyEightDto extends PartialType(CreateDailyEightDto) {}
