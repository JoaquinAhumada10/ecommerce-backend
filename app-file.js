// import express from 'express';
// import handlebars from 'express-handlebars';
// import productsRouter from '../src/routes/products.js';
// import cartRouter from '../src/routes/cart.js';
// import viewsRouter from '../src/routes/views.router.js';
// import mongoose, { model } from 'mongoose';
// import { productModel } from './DAO/model/product.model.js';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import sessionRouter from './routes/session.js';
// import FileStore from 'session-file-store';

// const app = express();

// const fileStorage = FileStore(session);

// app.use(
// 	session({
// 		store: new fileStorage({ path: './sessions', ttl: 1000, retries: 0 }),
// 		secret: 'misecreto',
// 		saveUninitialized: false,
// 		resave: false,
// 	})
// );

// app.get('/', (req, res) => {
// 	req.session.user = 'admin';
// 	res.send('ok');
// });

// app.get('/value', (req, res) => {
// 	res.send(req.session.user);
// });
// app.use('/session', sessionRouter);

// // mongoose.connect(
// // 	'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/?retryWrites=true&w=majority'
// // );

// app.use(express.static('public'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //MONGO
// app.get('/products', async (req, res) => {
// 	const perPage = 10;
// 	const page = req.query.page || 1;

// 	let result;
// 	try {
// 		result = await productModel.paginate({}, { page, perPage });
// 	} catch (error) {
// 		console.log(error);
// 	}
// 	const data = {
// 		products: result.docs,
// 		hasPrevPage: result.hasPrevPage,
// 		prevPage: result.prevPage,
// 		hasNextPage: result.hasNextPage,
// 		nextPage: result.nextPage,
// 	};
// 	res.render('products', { data });
// });

// //API
// app.use('/api/products', productsRouter);
// app.use('/api/carts', cartRouter);

// const server = app.listen(8080, () =>
// 	console.log(`Server running on port: ${server.address().port}`)
// );
// server.on('error', (error) => console.log(error));

//HANDLEBARS
// app.use(viewsRouter);
// app.engine('handlebars', handlebars.engine());
// app.set('views', './views');
// app.set('view engine', 'handlebars'

//Cookies

// app.get('/setCookie', (req, res) => {
// 	res.cookie('unaCookie', 'valor1', { maxAge: 10000 }).send('Cookie');
// });

// app.get('/getCookie', (req, res) => {
// 	res.send(req.cookies);
// });

// app.get('/deleteCookie', (req, res) => {
// 	res.clearCookie('unaCookie').send('Cookie eliminada');
// });
// app.get('/signedCookie', (req, res) => {
// 	res
// 		.cookie('signed', 'valor cookie firmada', { signed: true })
// 		.send('Coookie firmada');
// });

// app.get('/getSignedCookie', (req, res) => {
// 	res.send(req.signedCookies);
// });

// app.get('/getAllCookies', (req, res) => {
// 	let cookies = {
// 		firmadas: req.signedCookies,
// 		comunes: req.cookies,
// 	};
// 	res.send(cookies);
// });

// app.get('/get-cookie', (req, res) => {
// 	res.send('getCookie');
// });

// app.post('/create-cookie', (req, res) => {
// 	const mail = req.body.userEmail;
// 	res.cookie('mail', mail).send('Cookie creada');
// });
