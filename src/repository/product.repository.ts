import { UpdateOptions } from "sequelize";
import Product from "../entities/Product";

export class ProductRepository {
  async findAllProducts(): Promise<Product[]> {
    return Product.findAll();
  }

  async findProductById(id: string): Promise<Product> {
    return Product.findByPk(id);
  }

  async createProduct(product: Partial<Product>): Promise<Product> {
    return Product.create(product);
  }

  async updateProduct(
    id: string,
    updatedUser: Partial<Product>,
    options?: UpdateOptions<Product>
  ): Promise<Product | null> {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error(`User with ID ${id} not found`);
    }

    return product.update(updatedUser, options);
  }

  async deleteProduct(id: string): Promise<Product | null> {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error(`User with ID ${id} not found`);
    }
    return product.save();
  }
}
