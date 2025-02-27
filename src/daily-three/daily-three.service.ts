import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DailyThreeService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllData() {
    return this.prismaService.product.findMany();
  }
}
