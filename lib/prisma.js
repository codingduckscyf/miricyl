import { PrismaClient } from '@prisma/client';

// As we are now using prisma in a serverless environment, we have to make sure it
// doesn't create too many connections. That's why we have to use this funky code below!

/** @type {PrismaClient} */
let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    console.log('Production: Created DB connection.');
} else {
    if (!global.prima) {
        global.prisma = new PrismaClient();
        console.log('Development: Created DB connection.');
    }
    prisma = global.db;
}


export { prisma };
