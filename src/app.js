import express from 'express';
import handlebars from 'express-handlebars';
import productsRouter from '../src/routes/products.js';
import cartRouter from '../src/routes/cart.js';
import viewsRouter from '../src/routes/views.router.js';
import { Server } from 'socket.io';
const app = express();

const PORT = 8080;
const httpServer = app.listen(PORT, () =>
	console.log(`server running on port: ${httpServer.address().port}`)
);
httpServer.on('error', (error) => console.log(error));

//WEB SOCKET
const socketServer = new Server(httpServer);

let productos = [];
socketServer.on('connection', (socket) => {
	console.log('nuevo socket creado');

	socket.emit('messages', productos);

	socket.on('message', (data) => {
		productos.push(data);
		socketServer.emit('messages', productos);
	});
});

//EXPRESS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//HANDLEBARS
app.use(viewsRouter);
app.engine('handlebars', handlebars.engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

//API
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
