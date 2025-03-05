import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DailyFiveDto } from './dto/daily-five-dto/daily-five-dto';

@Injectable()
export class DailyFiveService {
  constructor(private readonly prismaService: PrismaService) {}
  getDataProduction() {
    return this.prismaService.product.findMany();
  }
  getDataProductById(idProduct: number) {
    return this.prismaService.product.findUnique({
      where: { idProduct: Number(idProduct) },
    });
  }
  createDataProduction(body: DailyFiveDto) {
    return this.prismaService.product.create({
      data: {
        nameProduct: body.nameProduct,
        qty: body.qty,
        description: body.description,
      },
    });
  }
  updateDataProduction(idProduct: number, body: DailyFiveDto) {
    return this.prismaService.product.update({
      where: { idProduct },
      data: {
        description: body.description,
        nameProduct: body.nameProduct,
        qty: body.qty,
      },
    });
  }
  deteleDataProduction(idProduct: number) {
    return this.prismaService.product.delete({ where: { idProduct } });
  }
}
