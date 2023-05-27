import { UpdateOptions } from "sequelize";
import Order from "../entities/Order";

export class OrderRepository {
  async findAllOrders(): Promise<Order[]> {
    return Order.findAll();
  }

  async findOrderById(id: string): Promise<Order> {
    return Order.findByPk(id);
  }

  async createOrder(order: Partial<Order>): Promise<Order> {
    return Order.create(order);
  }

  async updateOrder(
    id: string,
    updatedUser: Partial<Order>,
    options?: UpdateOptions<Order>
  ): Promise<Order | null> {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

    return order.update(updatedUser, options);
  }

  async deleteOrder(id: string): Promise<Order | null> {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }
    return order.save();
  }
}
