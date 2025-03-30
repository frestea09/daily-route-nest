import { Injectable } from '@nestjs/common';

@Injectable()
export class DailyRouteService {
  sayHelloWorld() {
    return 'hello world';
  }
}
