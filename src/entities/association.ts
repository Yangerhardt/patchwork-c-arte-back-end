import User from "./User";
import Order from "./Order";
import Product from "./Product";

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Order.belongsToMany(Product, {
  through: "OrderProduct",
  foreignKey: "orderId",
  otherKey: "productId",
  as: "products",
});

Product.belongsToMany(Order, {
  through: "OrderProduct",
  foreignKey: "productId",
  otherKey: "orderId",
  as: "orders",
});
