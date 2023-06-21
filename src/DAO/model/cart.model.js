import mongoose from 'mongoose';

const cartCollection = 'carts';

const CartSchema = new mongoose.Schema({
	user: String,
	email: String,
	products: {
		type: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'products',
				},
			},
		],
		default: [],
	},
});

CartSchema.pre('find', function () {
	this.populate('products.product');
});

export const cartModel = mongoose.model(cartCollection, CartSchema);
