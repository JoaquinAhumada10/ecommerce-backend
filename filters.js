import mongoose from 'mongoose';
import { productModel } from './src/DAO/model/product.model.js';

const environment = async () => {
	await mongoose.connect(
		'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/?retryWrites=true&w=majority'
	);
	let products = await productModel.paginate(
		{ category: 'nike' },
		{ limit: 30, page: 1 }
	);
	console.log(products);

	// let result = await productModel.aggregate([

	// ]);

	// console.log(JSON.stringify(result, null, 2));
};

environment();

//MAYOR A NENOR EN PRECIO
// {
// 	$group: { _id: '$price', products: { $push: '$$ROOT' } },
// },
// {
// 	$sort: {
// 		_id: -1,
// 	},
// },

// FILTRADO POR CATEGORIA
// {
//     $group: { _id: '$category', products: { $push: '$$ROOT' } },
// },
// ]);

// console.log(JSON.stringify(result, null, 2));

//PROMEDIO DE PRECIOS
// {
// 	$match: { category: 'detroit' },
// },
// {
// 	$group: {
// 		_id: '$category',
// 		promedio: { $avg: '$price' },
// 	},
// },
