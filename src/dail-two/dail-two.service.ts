import { Injectable } from '@nestjs/common';
import { Prisma, User, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DailTwoService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  sayHelloWorld() {
    return 'hello world';
  }
  create(name: string, email: string): Promise<User> {
    return this.prisma.user.create({
      data: { name, email },
    });
  }
  async getProduct() {
    return this.prisma.product.findMany();
  }
  createProduct(
    nameProduct: string,
    qty: number,
    description?: string,
  ): Promise<Product> {
    return this.prisma.product.create({
      data: {
        nameProduct,
        qty,
        description,
      },
    });
  }
  getProductionIlmanById(idProduct: number) {
    return this.prisma.product.findUnique({
      where: { idProduct: Number(idProduct) },
    });
  }
  updateProductionIlman(
    idProduct: number,
    nameProduct: string,
    qty: number,
    description: string,
  ) {
    return this.prisma.product.update({
      where: { idProduct: Number(idProduct) },
      data: {
        nameProduct,
        description,
        qty,
      },
    });
  }
  deleteProductIlman(idProduct: number) {
    return this.prisma.product.delete({
      where: { idProduct },
    });
  }
}
