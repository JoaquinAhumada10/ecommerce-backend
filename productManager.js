class ProductManager {
	products;

	constructor() {
		this.products = [];
	}

	getNewId() {
		return this.products.length + 1;
	}

	getProducts() {
		console.log(this.products);
		//return this.products;
	}
	getProductById(id) {
		let product = this.products.find((elem) => elem.id == id);
		if (product) {
			console.log(product);
			//return product;
		} else {
			console.log('not found');
		}
	}

	addProducts(title, description, price, thumbnail, stock, code) {
		let productWithSameCode = this.products.find(
			(product) => product.code === code
		);
		if (productWithSameCode) {
			console.log(`Error: Product with code ${code} already exists`);
		} else {
			let newProduct = {
				id: this.getNewId(),
				title,
				description,
				price,
				thumbnail,
				stock,
				code,
			};
			this.products.push(newProduct);
		}
	}
}

let manager = new ProductManager();
manager.addProducts(
	'Air Force 1',
	'color blanco, logo blanco y base negra',
	15000,
	'',
	5,
	100
);
manager.addProducts(
	'WOONDER',
	'todas negras, cordones reflex',
	13000,
	'',
	4,
	110
);
manager.getProductById(3);
manager.getProducts();
