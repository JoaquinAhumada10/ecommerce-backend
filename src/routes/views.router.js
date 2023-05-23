import { Router } from 'express';
const viewsRouter = Router();

viewsRouter.get('/realtimeproducts', (req, res) => {
	let testUser = {
		name: 'joaquin',
		rol: 'admin',
	};
	res.render('realTimeProducts', {
		products,
		style: 'index.css',
		testUser,
		admin: testUser.rol == 'admin',
	});
});

viewsRouter.get('/home', (req, res) => {
	let testUser = {
		name: 'joaquin',
		rol: 'admin',
	};
	res.render('home', {
		products,
		style: 'index.css',
		testUser,
		admin: testUser.rol == 'admin',
	});
});

let products = [
	{
		title: 'air force 1 white',
		category: 'nike',
		price: 15000,
	},
	{
		title: 'air force 1 black',
		category: 'nike',
		price: 15000,
	},
	{
		title: 'detroit white',
		category: 'detroit',
		price: 15000,
	},
	{
		title: 'detroit black',
		category: 'detroit',
		price: 15000,
	},
];

export default viewsRouter;
