import Order from "../entities/Order";
import { OrderRepository } from "../repository/order.repository";

export class OrderService {
  private readonly orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  async findAllOrders(): Promise<Order[]> {
    try {
      return await this.orderRepository.findAllOrders();
    } catch (err) {
      console.log("Error finding orders.");
      console.log(err);
      throw new Error("Error finding orders" + err);
    }
  }

  async findOrderById(id: string): Promise<Order | undefined> {
    try {
      return await this.orderRepository.findOrderById(id);
    } catch (error) {
      console.log("Error finding order with id: " + id);
      throw new Error("Error finding order ID.");
    }
  }

  async createOrder(order: Order): Promise<Order> {
    try {
      return await this.orderRepository.createOrder(order.dataValues);
    } catch (error) {
      console.log(error?.errors[0]);
      console.log("Error creating a new order");
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
      console.log("Error updating order");
      throw new Error("Error updating user.");
    }
  }

  async deleteOrder(id: string): Promise<Order | undefined> {
    try {
      return await this.orderRepository.deleteOrder(id);
    } catch (error) {
      console.log("Error to delete order with id: " + id);
      throw new Error("Error to delete order.");
    }
  }
}
