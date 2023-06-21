import mongoose from 'mongoose';
import { cartModel } from './src/DAO/model/cart.model.js';
import { productModel } from './src/DAO/model/product.model.js';

const environment = async () => {
	await mongoose.connect(
		'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/populate?retryWrites=true&w=majority'
	);

	// let cart = await cartModel.create({
	// 	user: 'Tomas',
	// 	email: 'joaquin1234@gmail.com',
	// });

	// let product = await productModel.create({
	// 	title: 'Detroit',
	// 	description: 'Black',
	// 	price: 12000,
	// 	thumbnail: 'asdasdas',
	// 	code: 190,
	// 	stock: 15,
	// 	category: 'detroit',
	//  quantity: 10
	// });

	// let cartFound = await cartModel.find({ email: 'joaquin1234@gmail.com' });

	// let productFound = await productModel.findOne({ title: 'Detroit' });

	// cartFound.products.push({ product: productFound._id });
	//  let result = await cartModel.updateOne({ _id: cartFound._id }, cartFound);
	// console.log(JSON.stringify(cartFound, null, '\t'));
};

environment();
