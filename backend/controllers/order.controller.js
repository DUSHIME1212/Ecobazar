const prisma = require('../lib/prisma');
const createError = require('http-errors');

exports.createOrder = async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const { items, total } = req.body; // items: [{ productId, quantity, price }]

    const order = await prisma.order.create({
      data: {
        total,
        userId,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const orders = await prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: 'desc' },
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

exports.getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await prisma.order.findUnique({
      where: { id },
      include: { items: { include: { product: true } }, user: { select: { name: true, email: true } } },
    });
    if (!order) throw createError.NotFound();
    res.json(order);
  } catch (error) {
    next(error);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await prisma.order.update({
      where: { id },
      data: { status },
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
};
