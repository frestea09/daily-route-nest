import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      nameProduct: faker.person.firstName(),
      qty: faker.number.int({ max: 50 }),
      description: faker.lorem.text(),
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
