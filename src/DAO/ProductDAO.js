import { productModel } from './model/product.model.js';

class ProductDaoManager {
	constructor() {
		this.model = productModel;
	}

	async getNextId() {
		try {
			let products = await this.getProducts();
			if (products.length == 0) {
				return 1;
			}
			let lastProduct = products[products.length - 1];
			return lastProduct.id + 1;
		} catch (error) {
			console.error(error);
		}
	}

	async addProducts(
		title,
		description,
		price,
		thumbnail,
		code,
		stock,
		category,
		quantity,
		size
	) {
		let products;
		try {
			products = await productModel.create({
				title,
				description,
				price,
				thumbnail,
				code,
				stock,
				category,
				quantity,
				size,
			});
		} catch (error) {
			console.error('Ocurrió un error al agregar productos:', error);
		}
		return products;
	}

	async getProducts() {
		let products;
		try {
			products = await this.model.find();
		} catch (error) {
			console.log(error);
		}
		return products;
	}

	async getProductsById(id) {
		let products = await this.getProducts();
		let productFind = products.find((product) => product.id == id);
		let product = productFind
			? productFind
			: { msg: 'Producto no encontrado con ese ID' };
		return product;
	}

	async updateProduct(pid, properties) {
		let products;
		try {
			products = await productModel.updateOne({ id: pid }, properties);
		} catch (error) {
			console.log(error);
		}
	}

	async deleteProduct(_id) {
		try {
			let product = await productModel.findOneAndDelete({ _id });
			if (product) {
				return { msg: `Producto ${product.id} eliminado` };
			} else {
				return { msg: 'Producto no encontrado con ese ID' };
			}
		} catch (error) {
			console.error(error);
			return { msg: 'Ocurrió un error al eliminar el producto' };
		}
	}
}

const manager = new ProductDaoManager();

export default ProductDaoManager;
