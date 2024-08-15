import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  console.log('Prisma client initialized in production mode');
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
    console.log('Prisma client created in development mode');
  } else {
    console.log('Prisma client reused in development mode');
  }

  prisma = globalWithPrisma.prisma;
}

export default prisma;
