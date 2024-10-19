const router = require('express').Router();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/', async (req, res, next) => {
  try{
    const users = await prisma.user.findMany({})
    res.send(users);
  }
  catch(err){
    console.error(err)
  }
  
});

module.exports = router;
