import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();
app.use(express.urlencoded({ extended: true }));

const manager = new ProductManager();

app.get('/', (req, res) => {
	res.send('BigSneakers3 from Express');
});

app.get('/products', async (req, res) => {
	let product = await manager.getProducts();
	res.send(product);
});
app.get('/products/:id', async (req, res) => {
	let id = req.params.id;
	let product = await manager.getProductsById(id);
	res.send(product);
});

const server = app.listen(8080, () =>
	console.log('server running on port 8080')
);
