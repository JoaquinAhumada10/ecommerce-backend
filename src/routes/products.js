import { Router } from 'express';
import ProductDaoManager from '../DAO/ProductDAO.js';
import { productModel } from '../DAO/model/product.model.js';

const productsRouter = Router();

const productManager = new ProductDaoManager();

productsRouter.get('/', async (req, res) => {
	let products;
	try {
		products = await productManager.getProducts();
	} catch (error) {}

	let catalogo = products.map((elem) => {
		return {
			title: elem.title,
			description: elem.description,
			category: elem.category,
			price: elem.price,
			code: elem.code,
		};
	});

	res.render('product', { catalogo });
	// res.send({ status: 'success', payload: products });
});

productsRouter.get('/:id', async (req, res) => {
	let id = req.params.id;
	let product = await productManager.getProductsById(id);
	if (!product) {
		res.status(400).send({ status: 'error' });
	}
	res.send(product);
});

productsRouter.post('/', async (req, res) => {
	let response;
	let {
		title,
		description,
		price,
		thumbnail,
		code,
		stock,
		category,
		quantity,
		size,
	} = req.body;
	if (
		!title ||
		!description ||
		!price ||
		!thumbnail ||
		!code ||
		!stock ||
		!category ||
		!quantity ||
		!size
	)
		return res.send({ status: 'error', error: 'incomplete values' });

	try {
		response = await productManager.addProducts(
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
			category,
			quantity,
			size
		);
	} catch (error) {}

	res.send({ status: 'succes', payload: response });
});

productsRouter.put('/:id', async (req, res) => {
	let pid = req.params.pid;
	let {
		title,
		description,
		price,
		thumbnail,
		code,
		stock,
		category,
		quantity,
		size,
	} = req.body;
	if (
		!title ||
		!description ||
		!price ||
		!thumbnail ||
		!code ||
		!stock ||
		!category ||
		!quantity ||
		!size
	)
		return res.send({ status: 'error', error: 'incomplete values' });
	let productsUpdated;

	try {
		productsUpdated = await productManager.updateProduct(pid, {
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
			category,
			quantity,
			size,
		});
	} catch (error) {
		res.status(500).send({ status: 'error', error });
	}

	res.send({ status: 'succes', payload: productsUpdated });
});

productsRouter.delete('/:id', async (req, res) => {
	let _id = req.params.id;

	try {
		let result = await productManager.deleteProduct(_id);
		res.send(result);
	} catch (error) {
		res.status(500).send({ status: 'error', error });
	}
});
export default productsRouter;
