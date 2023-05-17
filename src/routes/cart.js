import { Router } from 'express';
import CartManager from '../../src/CartManager.js';
const cartRouter = Router();

const manager = new CartManager();

cartRouter.get('/', async (req, res) => {
	let cart = await manager.getCarts();
	res.send(cart);
});

cartRouter.get('/:id', async (req, res) => {
	let id = req.params.id;
	let cart = await manager.getCartsById(id);
	if (!cart) {
		res.status(400).send({ status: 'error' });
	}
	res.send(cart);
});

cartRouter.post('/', async (req, res) => {
	let cart = await manager.createCart();
	res.send(cart);
});

cartRouter.post('/:id/products/:pid', async (req, res) => {
	let id = req.params.id;
	let pid = req.params.pid;
	const quantity = 1;

	let cart = await manager.getCartsById(id);
	if (!cart) {
		res.status(404).send({ error: 'Carrito no encontrado' });
		return;
	}
	const product = {
		id: pid,
	};
	cart.products.push({ product, quantity });
	await manager.addProductToCart(cart);
	res.send(cart);
});

export default cartRouter;
