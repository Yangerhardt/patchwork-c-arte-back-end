import { validate } from "class-validator";
import Order from "../../entities/Order";

export function mapOrderValidationData(reqBody: any): Order {
  try {
    const order = new Order();
    order.status = reqBody.status;
    order.userId = reqBody.userId;
    order.productIds = reqBody.productIds;
    order.shippingInfo = reqBody.shippingInfo;
    order.paymentInfo = reqBody.paymentInfo;
    order.additionalNotes = reqBody.additionalNotes;

    return order;
  } catch (err) {
    console.error(
      "There was an error creating a new order. Check if the body type data is correct"
    );
    throw err;
  }
}

export async function validateOrder(order: Order): Promise<string[]> {
  const validationErrors = await validate(order);
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
