const prisma = require('../lib/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

exports.signup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) throw createError.BadRequest();

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) throw createError.Conflict(`${email} is already registered`);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw createError.BadRequest();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw createError.NotFound('User not registered');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw createError.Unauthorized('Email/password not valid');

    const accessToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET || 'secret',
      { expiresIn: '15d' }
    );

    res.json({
      message: 'Login successful',
      accessToken,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { addresses: true },
    });
    if (!user) throw createError.NotFound();

    const { password, ...userData } = user;
    res.json(userData);
  } catch (error) {
    next(error);
  }
};
