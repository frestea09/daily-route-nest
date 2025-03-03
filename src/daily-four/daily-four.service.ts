import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DailyFourDto } from './dto/daily-four.dto/daily-four.dto';

@Injectable()
export class DailyFourService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllData() {
    return this.prismaService.product.findMany();
  }
  getDataById(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }
  createDataProduct(dailyFourDto: DailyFourDto) {
    return this.prismaService.product.create({
      data: {
        nameProduct: dailyFourDto.nameProduct,
        qty: dailyFourDto.qty,
        description: dailyFourDto.description,
      },
    });
  }
  updateDataProduct(id: number, dailyFourDto: DailyFourDto) {
    return this.prismaService.product.update({
      where: { idProduct: Number(id) },
      data: {
        nameProduct: dailyFourDto.nameProduct,
        qty: dailyFourDto.qty,
        description: dailyFourDto.description,
      },
    });
  }
  deleteDataProduct(id: number) {
    return this.prismaService.product.delete({
      where: { idProduct: Number(id) },
    });
  }
}
