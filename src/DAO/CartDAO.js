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
		let carts = await this.getCarts();
		let cartFind = carts.find((cart) => cart.id == id);
		let cart = cartFind
			? cartFind
			: { msg: 'Carrito no encontrado con ese ID' };
		return cart;
	}

	async addProductToCart(_id, cid) {
		try {
			let carts = await this.getCarts();
			let index = carts.findIndex((cart) => cart.id == cid);

			if (index == -1) {
				throw new Error('Cart not found');
			}

			carts[index].products.push(_id);

			return carts[index];
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async createCart() {
		try {
			const newCart = {
				products: [],
			};
			const cart = await this.model.create(newCart);
			return cart;
		} catch (error) {
			console.log(error);
			return { msg: 'Error al crear el carrito' };
		}
	}
}
const cartManager = new CartDaoManager();

// Obtener todos los carritos
//const carts = await cartManager.getCarts();
//console.log(carts);

// Obtener un carrito por su ID
// const cart = await cartDaoManager.getCartById('carrito_id');
// console.log(cart);

// Agregar un producto a un carrito
// const updatedCart = await cartDaoManager.addProductToCart(
// 'producto_id',
// 'carrito_id'
// );
// console.log(updatedCart);

// Crear un nuevo carrito
//const newCart = await cartManager.createCart();
//console.log(newCart);

export default CartDaoManager;
