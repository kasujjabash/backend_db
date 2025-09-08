const {prismaClient} = require('../generated/prisma');

const prisma = new PrismaClient();

module.exports = prisma;