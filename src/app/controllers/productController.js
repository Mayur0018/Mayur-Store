import { getAllProducts, createProduct } from "@/app/models/productModel";

export function getProductsController() {
  return getAllProducts();
}

export function createProductController(data) {
  return createProduct(data);
}
