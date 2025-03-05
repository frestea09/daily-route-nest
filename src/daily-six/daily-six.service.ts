import { Injectable } from '@nestjs/common';
import { CreateDailySixDto } from './dto/create-daily-six.dto';
import { UpdateDailySixDto } from './dto/update-daily-six.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DailySixService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createDailySixDto: CreateDailySixDto) {
    return this.prismaService.product.create({
      data: {
        nameProduct: createDailySixDto.nameProduct,
        qty: createDailySixDto.qty,
        description: createDailySixDto.description,
      },
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({ where: { idProduct: id } });
  }

  update(id: number, updateDailySixDto: UpdateDailySixDto) {
    return this.prismaService.product.update({
      where: { idProduct: id },
      data: {
        description: updateDailySixDto.description,
        nameProduct: updateDailySixDto.nameProduct,
        qty: updateDailySixDto.qty,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({ where: { idProduct: id } });
  }
}
