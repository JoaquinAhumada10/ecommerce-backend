import mongoose from 'mongoose';

const cartCollection = 'carts';

const CartSchema = new mongoose.Schema({
	pedido: {
		type: String,
	},
});

export const cartModel = mongoose.model(cartCollection, CartSchema);
