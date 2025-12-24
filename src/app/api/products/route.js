import { NextResponse } from "next/server";
import {
  getProductsController,
  createProductController,
} from "@/app/controllers/productController";

export async function GET() {
  const products = getProductsController();
  return NextResponse.json(products);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const newProduct = createProductController({
      id: Date.now(),
      ...body,
    });

    return NextResponse.json(
      { message: "Product created", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
