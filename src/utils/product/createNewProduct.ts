import { validate } from "class-validator";
import Product from "../../entities/Product";

export function mapProductValidationData(reqBody: any): Product {
  try {
    const product = new Product();
    product.name = reqBody.name;
    product.price = reqBody.price;
    product.available = reqBody.available;
    product.category = reqBody.category;
    product.image = reqBody.image;
    product.weight = reqBody.weight;
    product.height = reqBody.height;
    product.width = reqBody.width;
    product.material = reqBody.material;
    product.description = reqBody.description;

    return product;
  } catch (err) {
    console.error(
      "There was an error creating a new product. Check if the body type data is correct"
    );
    throw err;
  }
}

export async function validateProduct(product: Product): Promise<string[]> {
  const validationErrors = await validate(product);
  const errors: string[] = [];

  if (validationErrors.length > 0) {
    validationErrors.forEach((error) => {
      Object.values(error.constraints).forEach((constraint) => {
        errors.push(constraint);
      });
    });
  }
  return errors;
}
