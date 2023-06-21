import express from 'express';
import handlebars from 'express-handlebars';
import productsRouter from '../src/routes/products.js';
import cartRouter from '../src/routes/cart.js';
import viewsRouter from '../src/routes/views.router.js';
import mongoose, { model } from 'mongoose';
import { productModel } from './DAO/model/product.model.js';

const app = express();
mongoose.connect(
	'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.static('public'));

//EXPRESS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MONGO
app.get('/products', async (req, res) => {
	const perPage = 10;
	const page = req.query.page || 1;

	let result;
	try {
		result = await productModel.paginate({}, { page, perPage });
	} catch (error) {
		console.log(error);
	}
	const data = {
		products: result.docs,
		hasPrevPage: result.hasPrevPage,
		prevPage: result.prevPage,
		hasNextPage: result.hasNextPage,
		nextPage: result.nextPage,
	};
	res.render('products', { data });
});

//HANDLEBARS
app.use(viewsRouter);
app.engine('handlebars', handlebars.engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

//API
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

const server = app.listen(8080, () =>
	console.log(`Server running on port: ${server.address().port}`)
);
server.on('error', (error) => console.log(error));
