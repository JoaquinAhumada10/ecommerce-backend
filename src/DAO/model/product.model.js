import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productCollection = 'products';

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		index: true,
	},
	description: {
		type: String,
		index: true,
	},
	price: {
		type: Number,
		index: true,
	},
	thumbnail: {
		type: String,
		index: true,
	},

	code: {
		type: Number,
		index: true,
	},

	stock: {
		type: Number,
		index: true,
	},
	category: {
		type: String,
		index: true,
	},
	quantity: {
		type: Number,
		index: true,
	},
	size: {
		type: String,
		index: true,
	},
});

ProductSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection, ProductSchema);
