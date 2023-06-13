import { Router } from 'express';
import CartDaoManager from '../DAO/CartDAO.js';
const cartRouter = Router();

const cartManager = new CartDaoManager();

cartRouter.get('/', async (req, res) => {
	let carts = await cartManager.getCarts();
	res.send({ status: 'success', payload: carts });
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
	let id = req.params.id;
	let pid = req.params.pid;
	const quantity = 1;

	let cart = await cartManager.getCartsById(id);
	if (!cart) {
		res.status(404).send({ error: 'Carrito no encontrado' });
		return;
	}
	const product = {
		id: pid,
	};
	cart.products.push({ product, quantity });
	await cartManager.addProductToCart(cart);
	res.send(cart);
});

export default cartRouter;
