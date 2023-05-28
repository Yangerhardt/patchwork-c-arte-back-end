import { Request, Response } from "express";
import Order from "../entities/Order";
import {
  mapOrderValidationData,
  validateOrder,
} from "../utils/order/createNewOrder";
import { OrderService } from "../service/order.service";
import { validate } from "class-validator";
import { isValidUUID } from "../utils/order/isValidaUUID";
import { CustomError } from "../exception/CustomError";

export class OrderController {
  private readonly orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.body;
      const { productIds } = req.body;
      let invalidaIds = 0;

      if (!isValidUUID(userId)) {
        invalidaIds++;
      }

      productIds.forEach((product) => {
        if (isValidUUID(product)) {
          invalidaIds++;
        }
      });

      if (invalidaIds > 0) {
        throw new CustomError("Invalid id format", 400);
      }

      const orderValidation: Order = mapOrderValidationData(req.body);

      const validationErrors = await validateOrder(orderValidation);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const createdOrder = await this.orderService.createOrder(orderValidation);

      return res.status(201).json(createdOrder);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error: " + error });
    }
  }

  async getOrders(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await this.orderService.findAllOrders();

      if (!orders) {
        return res.status(404).json({ error: "No orders in the database" });
      }

      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getOrderById(req: Request, res: Response): Promise<Response> {
    try {
      const orderId = req.params.id;
      const order = await this.orderService.findOrderById(orderId);

      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      return res.json(order);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateOrder(req: Request, res: Response): Promise<Response> {
    try {
      const orderId = req.params.id;
      const orderValidation = mapOrderValidationData(req.body);

      const validationErrors = await validate(orderValidation);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const updatedOrder = await this.orderService.updateOrder(
        orderId,
        orderValidation
      );

      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }

      return res.json(updatedOrder);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteOrder(req: Request, res: Response): Promise<Response> {
    try {
      const orderId = req.params.id;

      const deletedOrder = await this.orderService.deleteOrder(orderId);

      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }

      return res.json({ message: "Order deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
