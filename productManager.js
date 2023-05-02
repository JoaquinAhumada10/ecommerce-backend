import fs from 'fs';

class ProductManager {
	constructor() {
		this.path = 'products.json';
	}

	async getNextId() {
		let products = await this.getProducts();
		if (products.length === 0) {
			return 1;
		}
		let lastProduct = products[products.length - 1];
		return lastProduct.id + 1;
	}

	async addProducts(product) {
		let products = await this.getProducts();
		products.push(product);
		await fs.promises.writeFile(this.path, JSON.stringify(products));
	}

	async getProducts() {
		let contenido = await fs.promises.readFile(this.path, 'utf-8');
		let products = JSON.parse(contenido);
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

	async updateProduct(id, product) {
		let products = await this.getProducts();
		let indice = products.findIndex((product) => product.id == id);
		if (indice !== -1) {
			products[indice] = product;
		}
		await fs.promises.writeFile(this.path, JSON.stringify(products));
		return { msg: `Product ${products[indice].id} updated` };
	}

	async deleteProduct(id) {
		let products = await this.getProducts();
		let indice = products.findIndex((product) => product.id == id);
		let productDeleted;
		if (indice !== -1) {
			productDeleted = products.splice(indice, 2)[0];
		}
		await fs.promises.writeFile(this.path, JSON.stringify(products));
		return { msg: `Product ${productDeleted.id} deleted` };
	}
}

const manager = new ProductManager();
let zapas1 = {
	id: await manager.getNextId(),
	title: 'Air Force 1 White',
	description: 'Blancas, logo Blanco, base Blanca',
	price: 15000,
	thumbnail: '',
	code: '150',
	stock: 5,
};
let zapas2 = {
	id: await manager.getNextId(),
	title: 'Air Force 1 Black',
	description: 'Negras, logo negro, base negra',
	price: 15000,
	thumbnail: '',
	code: '160',
	stock: 5,
};
let zapas3 = {
	id: await manager.getNextId(),
	title: 'Air Force 1 Gray',
	description: 'Gris, logo negro, base gris',
	price: 15000,
	thumbnail: '',
	code: '170',
	stock: 5,
};

// manager.addProducts(zapas3); // dejo prepaparado "zapas3" de ejemplo para que lo agregues y luego poder utilizarlo tambien con "deleteProduct"

// let allProducts = await manager.getProducts();
// console.log(allProducts);

// let product = await manager.getProductsById('1');
// console.log(product);

// let respuesta = await manager.updateProduct('1', zapas2);
// console.log(respuesta);

// let respuesta = await manager.deleteProduct('3'); //
// console.log(respuesta);
