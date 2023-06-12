import { redisClient } from "..";
import Product from "../entities/Product";
import { ProductRepository } from "../repository/product.repository";

export class ProductService {
  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async findAllProducts(): Promise<Product[]> {
    try {
      const cachedProducts = await redisClient.get("products");

      if (cachedProducts) {
        return JSON.parse(cachedProducts);
      }

      const products = await this.productRepository.findAllProducts();

      await redisClient.set("products", JSON.stringify(products), "EX", 3600);

      return products;
    } catch (err) {
      console.log("Error finding products.");
      console.log(err);
      throw new Error("Error finding products" + err);
    }
  }

  async findProductById(id: string): Promise<Product | undefined> {
    try {
      const cachedProducts = await redisClient.get("singleProduct");

      if (cachedProducts) {
        return JSON.parse(cachedProducts);
      }

      const singleProduct = await this.productRepository.findProductById(id);

      await redisClient.set(
        "singleProduct",
        JSON.stringify(singleProduct),
        "EX",
        3600
      );

      return singleProduct;
    } catch (error) {
      console.log("Error finding product with id: " + id);
      throw new Error("Error finding product ID.");
    }
  }

  async createProduct(product: Product): Promise<Product> {
    try {
      return await this.productRepository.createProduct(product.dataValues);
    } catch (error) {
      console.log(error?.errors[0]);
      console.log("Error creating a new product");
      throw new Error(error);
    }
  }

  async updateProduct(
    id: string,
    product: Partial<Product>
  ): Promise<Product | undefined> {
    try {
      return await this.productRepository.updateProduct(id, product.dataValues);
    } catch (error) {
      console.log("Error updating product");
      throw new Error("Error updating user.");
    }
  }

  async deleteProduct(id: string): Promise<Product | undefined> {
    try {
      return await this.productRepository.deleteProduct(id);
    } catch (error) {
      console.log("Error to delete product with id: " + id);
      throw new Error("Error to delete product.");
    }
  }
}
