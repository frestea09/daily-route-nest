import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DailTwoService } from './dail-two.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('dail-two')
export class DailTwoController {
  constructor(
    private readonly dailTwoService: DailTwoService,
    private readonly prismaService: PrismaService,
  ) {}
  @Get()
  sayHelloWorld() {
    return this.prismaService.user.findMany();
  }
  @Get('product/ilman')
  getProduction() {
    return this.dailTwoService.getProduct();
  }
  @Get('product/ilman/:id')
  getProductId(@Param('id') idProduct: number) {
    // return id;
    return this.dailTwoService.getProductionIlmanById(idProduct);
  }
  @Post('product/ilman')
  createProductIlman(
    @Body() body: { nameProduct: string; qty: number; description: string },
  ) {
    return this.dailTwoService.createProduct(
      body.nameProduct,
      body.qty,
      body.description,
    );
  }
  @Put('/product/ilman/:id')
  updateProductIlman(
    @Param('id') idProduct: number,
    @Body() body: { nameProduct: string; qty: number; description: string },
  ) {
    return this.dailTwoService.updateProductionIlman(
      idProduct,
      body.nameProduct,
      body.qty,
      body.description,
    );
  }
  @Delete('/product/ilman/:id')
  deleteProductIlman(@Param('id') id: number) {
    return this.dailTwoService.deleteProductIlman(Number(id));
  }

  @Get('/product/:id')
  getProductionId(@Param('id') id: string) {
    return id;
  }

  @Post('/product')
  createProduct(@Body() body: { name: string; email: string }) {
    return this.dailTwoService.create(body.name, body.email);
  }
  @Put('/product/:id')
  updateProductId(@Param('id') id: string) {
    return id;
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return id;
  }
}
