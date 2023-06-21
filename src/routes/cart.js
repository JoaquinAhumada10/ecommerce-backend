import { Router } from 'express';
import CartDaoManager from '../DAO/CartDAO.js';
const cartRouter = Router();

const cartManager = new CartDaoManager();

cartRouter.get('/', async (req, res) => {
	try {
		const carts = await cartManager.getCarts();
		res.send({ status: 'success', payload: carts });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.send({ status: 'error', message: 'Error al obtener los carritos' });
	}
});

cartRouter.get('/:id', async (req, res) => {
	let id = req.params.id;
	let cart = await cartManager.getCartsById(id);
	if (!cart) {
		res.status(400).send({ status: 'error' });
	}
	res.send(cart);
});

cartRouter.post('/', async (req, res) => {
	let cart = await cartManager.createCart();
	res.send(cart);
});

cartRouter.post('/:id/products/:pid', async (req, res) => {
	try {
		let id = req.params.id;
		let _id = req.params.pid; // Corregido: Cambiado "_id" por "pid"
		const quantity = 1;

		let cart = await cartManager.getCartsById(id);
		if (!cart) {
			res.status(404).send({ error: 'Carrito no encontrado' });
			return;
		}

		const product = {
			id: _id,
		};
		cart.products.push({ product, quantity });

		await cartManager.addProductToCart(_id, id); // Corregido: Cambiado el orden de los parámetros

		res.send(cart);
	} catch (error) {
		console.error(error);
		res.status(500).send({ error: 'Error al agregar el producto al carrito' });
	}
});

export default cartRouter;
