import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
export class CreateDailyEightDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}

export class DailEightDto {
  @IsNumberString()
  id: string;
}
