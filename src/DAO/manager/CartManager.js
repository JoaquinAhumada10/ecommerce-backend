// import fs from 'fs';

// class CartManager {
// 	constructor() {
// 		this.path = './src/db/carts.json';
// 	}

// 	async getCarts() {
// 		let carts;
// 		try {
// 			let contenido = await fs.promises.readFile(this.path, 'utf-8');
// 			carts = JSON.parse(contenido);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 		return carts;
// 	}
// 	async getCartsById(id) {
// 		let carts = await this.getCarts();
// 		let cartFind = carts.find((cart) => cart.id == id);
// 		let cart = cartFind
// 			? cartFind
// 			: { msg: 'Carrito no encontrado con ese ID' };
// 		return cart;
// 	}

// 	async addProductToCart(id, cid) {
// 		let cart;
// 		let carts = await this.getCarts();
// 		let index = carts.findIndex((cart) => cart.id == cid);
// 		if (index == -1) {
// 			return cart;
// 		}
// 		carts[index].products.push(id);

// 		try {
// 			await fs.promises.writeFile(this.path, JSON.stringify(carts));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 		return carts[index];
// 	}

// 	getNextId() {
// 		return Date.now();
// 	}

// 	async createCart() {
// 		let newCart = {
// 			id: this.getNextId(),
// 			products: [],
// 		};
// 		let carts = await this.getCarts();
// 		carts.push(newCart);

// 		try {
// 			await fs.promises.writeFile(this.path, JSON.stringify(carts));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 		return newCart;
// 	}
// }

// export default CartManager;
