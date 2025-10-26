import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import cartRoutes from './routes/cartRoutes';
import orderRoutes from './routes/orderRoutes';
import feedbackRoutes from './routes/feedback.route'
import favoriteRoutes from './routes/favoriteRoutes'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/fav', favoriteRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
