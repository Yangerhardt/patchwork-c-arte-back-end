import { Request, Response } from "express";
import Product from "../entities/Product";
import {
  mapProductValidationData,
  validateProduct,
} from "../utils/product/createNewProduct";
import { ProductService } from "../service/product.service";
import { validate } from "class-validator";

export class ProductController {
  private readonly productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const productValidation: Product = mapProductValidationData(req.body);

      const validationErrors = await validateProduct(productValidation);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const createdProduct = await this.productService.createProduct(
        productValidation
      );

      return res.status(201).json(createdProduct);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error: " + error });
    }
  }

  async getProducts(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.productService.findAllProducts();

      if (!products) {
        return res.status(404).json({ error: "No products in the database" });
      }

      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getProductById(req: Request, res: Response): Promise<Response> {
    try {
      const productId = req.params.id;
      const product = await this.productService.findProductById(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<Response> {
    try {
      const productId = req.params.id;
      const productValidation = mapProductValidationData(req.body);

      const validationErrors = await validate(productValidation);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const updatedProduct = await this.productService.updateProduct(
        productId,
        productValidation
      );

      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
      const productId = req.params.id;

      const deletedProduct = await this.productService.deleteProduct(productId);

      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json({ message: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
