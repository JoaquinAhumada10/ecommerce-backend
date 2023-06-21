import mongoose from 'mongoose';
import { productModel } from './src/DAO/model/product.model.js';

const environment = async () => {
	await mongoose.connect(
		'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/orders?retryWrites=true&w=majority'
	);

	let result = await productModel.aggregate([
		{
			$match: { size: 'small' },
		},
		{
			$group: {
				_id: '$title',
				total: { $sum: '$quantity' },
			},
		},
		{
			$sort: {
				total: -1,
			},
		},
		{
			$group: {
				_id: 'Nuevo',
				orders: { $push: '$$ROOT' },
			},
		},
		{
			$project: { _id: 0, orders: '$orders' },
		},
		{
			$merge: {
				into: 'reports',
			},
		},
	]);
	console.log(result);
};

environment();
