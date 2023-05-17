import express from 'express';
import productsRouter from '../src/routes/products.js';
import cartRouter from '../src/routes/cart.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

const PORT = 8080;
const server = app.listen(PORT, () =>
	console.log(`server running on port: ${server.address().port}`)
);
server.on('error', (error) => console.log(error));
