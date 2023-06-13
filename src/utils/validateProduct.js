export const validateProduct = (product) => {
	let result = true;
	if (
		!product.title ||
		!product.description ||
		!product.price ||
		!product.thumbnail ||
		!product.code ||
		!product.stock ||
		!product.category
	) {
		result = false;
	}
	return result;
};
