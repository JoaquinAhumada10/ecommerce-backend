import { Router } from 'express';
import ProductManager from '../../src/ProductManager.js';
import { validateProduct } from '../../utils/validateProduct.js';
const productsRouter = Router();

const manager = new ProductManager();

productsRouter.get('/', async (req, res) => {
	let product = await manager.getProducts();
	res.send(product);
});

productsRouter.get('/:id', async (req, res) => {
	let id = req.params.id;
	let product = await manager.getProductsById(id);
	if (!product) {
		res.status(400).send({ status: 'error' });
	}
	res.send(product);
});

productsRouter.post('/', async (req, res) => {
	let product = req.body;
	if (!validateProduct(product)) {
		res.status(400).send({ status: 'error' });
	}
	product.id = await manager.getNextId();
	product.status = true;
	await manager.addProducts(product);
	res.send({ status: 'succes' });
});

productsRouter.put('/:id', async (req, res) => {
	let pid = req.params.id;
	let fields = req.body;
	let updateproducts = await manager.updateProduct(pid, fields);
	if (!updateproducts) {
		res.status(404).send({ status: 'error' });
	}
	res.send({ status: 'succes' });
});

productsRouter.delete('/:id', async (req, res) => {
	let id = req.params.id;
	let product = await manager.deleteProduct(id);
	res.send(product);
});

export default productsRouter;
