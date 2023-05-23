import express, { Request, Response } from "express";
import { ProductRepository } from "../repository/product.repository";
import { ProductService } from "../service/product.service";
import { ProductController } from "../controller/product.controller";

const productRouter = express.Router();

const createProductController = () => {
  const userRepository = new ProductRepository();
  const userService = new ProductService(userRepository);
  return new ProductController(userService);
};

productRouter.get("/", async (req: Request, res: Response) => {
  const productController = createProductController();
  await productController.getProducts(req, res);
});

productRouter.get("/:id", async (req: Request, res: Response) => {
  const productController = createProductController();
  await productController.getProductById(req, res);
});

productRouter.post("/", async (req: Request, res: Response) => {
  const productController = createProductController();
  await productController.createProduct(req, res);
});

productRouter.put("/:id", async (req: Request, res: Response) => {
  const productController = createProductController();
  await productController.updateProduct(req, res);
});

productRouter.delete("/:id", async (req: Request, res: Response) => {
  const productController = createProductController();
  await productController.deleteProduct(req, res);
});

export { productRouter };
