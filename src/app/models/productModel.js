import { products } from "../../Data/product";

export function getAllProducts() {
  return products;
}

export function createProduct(product) {
  products.push(product);
  return product;
}
