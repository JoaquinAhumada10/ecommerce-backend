import { cartModel } from './model/cart.model.js';

class CartDaoManager {
	constructor() {
		this.model = cartModel;
	}

	async getCarts() {
		let carts;
		try {
			carts = await this.model.find();
		} catch (error) {
			console.log(error);
		}
		return carts;
	}

	async getCartsById(id) {
		let products = await this.getCarts();
		let productFind = products.find((product) => product.id == id);
		let product = productFind
			? productFind
			: { msg: 'Producto no encontrado con ese ID' };
		return product;
	}
	async getCartsById(id) {
		let carts = await this.getCarts();
		let cartFind = carts.find((cart) => cart.id == id);
		let cart = cartFind
			? cartFind
			: { msg: 'Carrito no encontrado con ese ID' };
		return cart;
	}

	async addProductToCart(id, cid) {
		let cart;
		let carts = await this.getCarts();
		let index = carts.findIndex((cart) => cart.id == cid);
		if (index == -1) {
			return cart;
		}
		carts[index].products.push(id);

		return carts[index];
	}

	async createCart() {
		let newCart = {
			products: [],
		};

		let cart;
		try {
			cart = await cartModel.create(newCart);
		} catch (error) {
			console.log(error);
		}

		return cart;
	}
}

export default CartDaoManager;
