import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { v4 as uuidv4 } from "uuid";
import User from "./User";
import Product from "./Product";

class Order extends Model {
  public id!: string;
  public status!: string;
  public userId!: string;
  public productIds!: string[];
  public shippingInfo!: string;
  public paymentInfo!: string;
  public additionalNotes!: string;

  public readonly user?: User;
  public readonly products?: Product[];
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "In Separation",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    productIds: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    shippingInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additionalNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    timestamps: true,
  }
);

Order.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Order.belongsToMany(Product, {
  through: "OrderProduct",
  foreignKey: "orderId",
  otherKey: "productId",
  as: "products",
});

export default Order;
