import { IsString, IsNumber } from 'class-validator';

export class CreateDailySixDto {
  @IsString()
  nameProduct: string;

  @IsNumber()
  qty: number;

  @IsString()
  description: string;
}
