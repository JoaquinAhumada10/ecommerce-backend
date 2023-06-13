import mongoose from 'mongoose';

const productCollection = 'products';

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},

	code: {
		type: Number,
		required: true,
	},

	stock: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
});

export const productModel = mongoose.model(productCollection, ProductSchema);
