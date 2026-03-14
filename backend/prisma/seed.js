require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Create Users
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const user1 = await prisma.user.upsert({
    where: { email: 'admin@ecobazar.com' },
    update: {},
    create: {
      email: 'admin@ecobazar.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user@ecobazar.com' },
    update: {},
    create: {
      email: 'user@ecobazar.com',
      name: 'John Doe',
      password: hashedPassword,
      role: 'USER',
    },
  });

  console.log('Users seeded:', { admin: user1.email, user: user2.email });

  // 2. Create Categories
  const categoryNames = [
    'Fresh Fruit',
    'Vegetables',
    'Cooking',
    'Snacks',
    'Beverages',
    'Beauty & Health',
    'Bread & Bakery'
  ];

  const categories = {};
  for (const name of categoryNames) {
    const cat = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    categories[name] = cat;
  }

  console.log('Categories seeded');

  // 3. Create Products
  const images = [
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719334495/mnrrgojofgphnxq4arqs.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719392761/i6n7w9ilexrdd1dcvyn1.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719392540/ypkjobyec1y18q2a33q1.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719392113/um8t7b75rjv6rfzdzhgk.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719388253/l5nrrafvaunvkue4jbf2.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719341628/kcmvjauhcfnihzxtnopw.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719335291/mhxfa8b08bghakb25yom.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719334497/ux6a41juehn1phsxjx07.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719335281/ngkukq5ujukgbo4ck89b.webp',
    'https://res.cloudinary.com/dof771xd5/image/upload/v1719334492/fhfovah0zz8izvdplwhl.webp'
  ];

  const productTemplates = [
    { name: 'Green Apple', cat: 'Fresh Fruit', price: 14.99, oldPrice: 20.99 },
    { name: 'Fresh Orange', cat: 'Fresh Fruit', price: 12.00, oldPrice: 15.00 },
    { name: 'Chinese Cabbage', cat: 'Vegetables', price: 17.28, oldPrice: 48.00 },
    { name: 'Green Lettuce', cat: 'Vegetables', price: 9.00, oldPrice: 12.00 },
    { name: 'Eggplant', cat: 'Vegetables', price: 14.99, oldPrice: 20.00 },
    { name: 'Big Potatoes', cat: 'Vegetables', price: 14.99, oldPrice: 18.00 },
    { name: 'Corn', cat: 'Vegetables', price: 3.99, oldPrice: 5.99 },
    { name: 'Red Chili', cat: 'Vegetables', price: 6.99, oldPrice: 8.99 },
    { name: 'Red Strawberry', cat: 'Fresh Fruit', price: 18.00, oldPrice: 25.00 },
    { name: 'Green Capsicum', cat: 'Vegetables', price: 14.99, oldPrice: 22.00 },
  ];

  for (let i = 0; i < productTemplates.length; i++) {
    const template = productTemplates[i];
    await prisma.product.create({
      data: {
        name: template.name,
        description: `High quality ${template.name} sourced from sustainable farms. Fresh, organic, and perfect for your daily needs.`,
        price: template.price,
        oldPrice: template.oldPrice,
        stock: Math.floor(Math.random() * 100) + 10,
        rating: 4 + Math.random(),
        categoryId: categories[template.cat].id,
        images: JSON.stringify([images[i % images.length]]),
      },
    });
  }

  console.log('Products seeded');
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
