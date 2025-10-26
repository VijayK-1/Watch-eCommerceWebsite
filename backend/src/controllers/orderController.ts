import { Request, Response } from 'express';
import Order from '../models/Order';
import Cart from '../models/Cart';

export const placeOrder = async (req: Request, res: Response) => {
  const { name, address, payment } = req.body;
  const userId = req.userId as string;

  if (!name || !address || !['Cash on Delivery', 'UPI', 'Card'].includes(payment)) {
    return res.status(400).json({ message: 'Invalid payload' });
  }

  try {
    const cartItems = await Cart.find({ userId });
    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const items = cartItems.map(ci => ({
      productId: ci.get('productId'),
      name: ci.get('name'),
      priceAtPurchase: ci.get('price'),
      quantity: ci.get('quantity'),
      image: ci.get('image')
    }));

    const total = items.reduce((sum, i) => sum + i.priceAtPurchase * i.quantity, 0);

    const newOrder = await Order.create({ userId, name, address, payment, items, total });

    await Cart.deleteMany({ userId });
    res.json({ message: 'Order placed successfully', orderId: newOrder._id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to place order' });
  }
};
