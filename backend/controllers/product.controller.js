const prisma = require('../lib/prisma');
const createError = require('http-errors');

exports.getAllProducts = async (req, res, next) => {
  try {
    const { category, minPrice, maxPrice, sort } = req.query;
    
    let where = {};
    if (category) {
      where.category = { name: category };
    }
    if (minPrice || maxPrice) {
      where.price = {
        ...(minPrice && { gte: parseFloat(minPrice) }),
        ...(maxPrice && { lte: parseFloat(maxPrice) }),
      };
    }

    let orderBy = {};
    if (sort === 'low-to-high') orderBy = { price: 'asc' };
    else if (sort === 'high-to-low') orderBy = { price: 'desc' };
    else orderBy = { createdAt: 'desc' };

    const products = await prisma.product.findMany({
      where,
      orderBy,
      include: { category: true },
    });
    
    // Parse images string back to array and add a single 'image' property for frontend
    const processedProducts = products.map(p => {
      const imagesArr = JSON.parse(p.images || "[]");
      const price = p.price;
      const oldPrice = p.oldPrice;
      const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
      
      return {
        ...p,
        images: imagesArr,
        image: imagesArr[0] || null,
        isSale: !!oldPrice && oldPrice > price,
        discount: discount,
        outOfStock: p.stock <= 0
      };
    });

    res.json(processedProducts);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true, reviews: { include: { user: { select: { name: true } } } } },
    });
    if (!product) throw createError.NotFound();

    // Parse images string back to array and add a single 'image' property for frontend
    const imagesArr = JSON.parse(product.images || "[]");
    const price = product.price;
    const oldPrice = product.oldPrice;
    const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

    const processedProduct = {
      ...product,
      images: imagesArr,
      image: imagesArr[0] || null,
      isSale: !!oldPrice && oldPrice > price,
      discount: discount,
      outOfStock: product.stock <= 0
    };

    res.json(processedProduct);
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price, oldPrice, stock, categoryId } = req.body;
    
    // Extract image URLs from uploaded files if present
    let imageUrls = req.body.images || [];
    if (req.files && req.files.length > 0) {
      imageUrls = req.files.map(file => file.path);
    }

    const product = await prisma.product.create({
      data: { 
        name, 
        description, 
        price: parseFloat(price), 
        oldPrice: oldPrice ? parseFloat(oldPrice) : null, 
        images: JSON.stringify(imageUrls), // Store as string for SQLite
        stock: parseInt(stock), 
        categoryId 
      },
    });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.update({
      where: { id },
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
