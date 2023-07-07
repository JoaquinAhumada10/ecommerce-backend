import express from 'express';
import handlebars from 'express-handlebars';
import productsRouter from '../src/routes/products.js';
import cartRouter from '../src/routes/cart.js';
import viewsRouter from '../src/routes/views.router.js';
import mongoose, { model } from 'mongoose';
import { productModel } from './DAO/model/product.model.js';

import session from 'express-session';
import sessionRouter from './routes/session.js';
import MongoStore from 'connect-mongo';

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//HANDLEBARS
app.use(viewsRouter);
app.engine('handlebars', handlebars.engine({}));
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(
	session({
		store: MongoStore.create({
			mongoUrl:
				'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/session?retryWrites=true&w=majority',
			mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
			ttl: 3600,
		}),
		secret: 'misecreto',
		saveUninitialized: false,
		resave: false,
	})
);

app.use('/api/session', sessionRouter);

// mongoose.connect(
// 	'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/?retryWrites=true&w=majority'
// );

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

//API
app.use('/api/products', productsRouter);
app.use('/api/carts', cartRouter);

const server = app.listen(8080, () =>
	console.log(`Server running on port: ${server.address().port}`)
);
server.on('error', (error) => console.log(error));
