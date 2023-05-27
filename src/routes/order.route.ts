import express, { Request, Response } from "express";
import { OrderRepository } from "../repository/order.repository";
import { OrderService } from "../service/order.service";
import { OrderController } from "../controller/order.controller";

const orderRouter = express.Router();

const createorderController = () => {
  const orderRepository = new OrderRepository();
  const orderService = new OrderService(orderRepository);
  return new OrderController(orderService);
};

orderRouter.get("/", async (req: Request, res: Response) => {
  const orderController = createorderController();
  await orderController.getOrders(req, res);
});

orderRouter.get("/:id", async (req: Request, res: Response) => {
  const orderController = createorderController();
  await orderController.getOrderById(req, res);
});

orderRouter.post("/", async (req: Request, res: Response) => {
  const orderController = createorderController();
  await orderController.createOrder(req, res);
});

orderRouter.put("/:id", async (req: Request, res: Response) => {
  const orderController = createorderController();
  await orderController.updateOrder(req, res);
});

orderRouter.delete("/:id", async (req: Request, res: Response) => {
  const orderController = createorderController();
  await orderController.deleteOrder(req, res);
});

export { orderRouter };
