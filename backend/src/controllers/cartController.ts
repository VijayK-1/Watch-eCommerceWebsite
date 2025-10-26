import { Request, Response } from 'express';
import Cart from '../models/Cart';

export const addToCart = async (req: Request, res: Response) => {
  const { productId, name, price, image } = req.body;
  const userId = req.userId as string;

  if (!productId || !name || typeof price !== 'number' || !image) {
    return res.status(400).json({ message: 'Invalid payload' });
  }
  try {
    let item = await Cart.findOne({ userId, productId });
    if (item) {
      item.quantity += 1;
      await item.save();
    } else {
      item = await Cart.create({ userId, productId, name, price, image, quantity: 1 });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Add to cart failed' });
  }
};

export const getCart = async (req: Request, res: Response) => {
  const userId = req.userId as string;
  const items = await Cart.find({ userId });
  res.json(items);
};

export const updateQuantity = async (req: Request, res: Response) => {
  const { productId, type } = req.body;
  const userId = req.userId as string;
  if (!productId || !['inc', 'dec'].includes(type)) {
    return res.status(400).json({ message: 'Invalid payload' });
  }
  const item = await Cart.findOne({ userId, productId });
  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.quantity += type === 'inc' ? 1 : -1;
  if (item.quantity <= 0) await item.deleteOne();
  else await item.save();

  res.json(item);
};

export const removeFromCart = async (req: Request, res: Response) => {
  const { productId } = req.body;
  const userId = req.userId as string;
  if (!productId) return res.status(400).json({ message: 'Invalid payload' });

  try {
    const item = await Cart.findOne({ userId, productId });
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.deleteOne();
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove item' });
  }
};
        