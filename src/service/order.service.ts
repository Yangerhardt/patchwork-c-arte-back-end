import { redisClient } from "..";
import Order from "../entities/Order";
import { OrderRepository } from "../repository/order.repository";

export class OrderService {
  private readonly orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  async findAllOrders(): Promise<Order[]> {
    try {
      const cachedOrders = await redisClient.get("orders");

      if (cachedOrders) {
        return JSON.parse(cachedOrders);
      }

      const orders = await this.orderRepository.findAllOrders();

      redisClient.set("orders", JSON.stringify(orders), "EX", 3600);

      return orders;
    } catch (err) {
      throw new Error("Error finding orders" + err);
    }
  }

  async findOrderById(id: string): Promise<Order | undefined> {
    try {
      const cachedSingleOrder = await redisClient.get("singleOrder");

      if (cachedSingleOrder) {
        return JSON.parse(cachedSingleOrder);
      }

      const singleOrder = await this.orderRepository.findOrderById(id);

      redisClient.set("singleOrder", JSON.stringify(singleOrder), "EX", 3600);

      return singleOrder;
    } catch (error) {
      throw new Error("Error finding order ID.");
    }
  }

  async createOrder(order: Order): Promise<Order> {
    try {
      return await this.orderRepository.createOrder(order.dataValues);
    } catch (error) {
      console.log(error?.errors[0]);
      throw new Error(error);
    }
  }

  async updateOrder(
    id: string,
    order: Partial<Order>
  ): Promise<Order | undefined> {
    try {
      return await this.orderRepository.updateOrder(id, order.dataValues);
    } catch (error) {
      throw new Error("Error updating user.");
    }
  }

  async deleteOrder(id: string): Promise<Order | undefined> {
    try {
      return await this.orderRepository.deleteOrder(id);
    } catch (error) {
      throw new Error("Error to delete order.");
    }
  }
}
