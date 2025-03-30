import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyTenDto } from './create-daily-ten.dto';

export class UpdateDailyTenDto extends PartialType(CreateDailyTenDto) {}
