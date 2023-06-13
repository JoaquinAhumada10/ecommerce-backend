import express from 'express';
import handlebars from 'express-handlebars';
import productsRouter from '../src/routes/products.js';
import cartRouter from '../src/routes/cart.js';
import viewsRouter from '../src/routes/views.router.js';
import mongoose from 'mongoose';

const app = express();
mongoose.connect(
	'mongodb+srv://joaquinbusiness10:coder12345@cluster0.vclsyyk.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.static('public'));

//EXPRESS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
