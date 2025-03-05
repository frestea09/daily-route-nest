import { PartialType } from '@nestjs/mapped-types';
import { CreateDailySixDto } from './create-daily-six.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateDailySixDto extends PartialType(CreateDailySixDto) {
  @IsString()
  nameProduct: string;

  @IsNumber()
  qty: number;

  @IsString()
  description: string;
}
