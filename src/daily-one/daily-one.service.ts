import { Injectable } from '@nestjs/common';

@Injectable()
export class DailyOneService {
  sayHello() {
    return 'hello world';
  }
}
