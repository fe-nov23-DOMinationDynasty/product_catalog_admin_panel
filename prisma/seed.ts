import prisma from '@/utils/db';
import { readFileSync } from 'fs';
import path from 'path';

const products = JSON.parse(
  readFileSync(path.resolve('prisma/initialData/products.json')).toString()
);

const productsInfo = JSON.parse(
  readFileSync(path.resolve('prisma/initialData/productInfo.json')).toString()
);

const promos = JSON.parse(
  readFileSync(path.resolve('prisma/initialData/promos.json')).toString()
);

// async function reset() {
//   await prisma.productInfo.deleteMany();
//   await prisma.promo.deleteMany();
//   await prisma.description.deleteMany();
//   await prisma.product.deleteMany();
// }

async function main() {
  for (const promo of promos) {
    await prisma.promo.create({
      data: promo,
    });
  }

  for (const productInfo of productsInfo) {
    const descriptions = productInfo.description;
    delete productInfo.description;
    await prisma.productInfo.create({
      data: productInfo,
    });
    for (const description of descriptions) {
      await prisma.description.create({
        data: {
          productInfoId: productInfo.id,
          title: description.title,
          text: description.text,
        },
      });
    }
  }

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// reset()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
