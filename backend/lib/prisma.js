const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  // Prisma 7 pattern: Pass connection details or adapter to the constructor
  // For MongoDB direct connection without Accelerate:
  // (Assuming standard direct connection for now, adjusting to the error's suggestion)
  datasourceUrl: process.env.DATABASE_URL
});

module.exports = prisma;
