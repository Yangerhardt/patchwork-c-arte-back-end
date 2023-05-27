import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { v4 as uuidv4 } from "uuid";

class Order extends Model {
  public id!: string;
  public status!: string;
  public userId!: string;
  public productIds!: string[];
  public shippingInfo!: string;
  public paymentInfo!: string;
  public additionalNotes!: string;

  // static associate() {
  //   this.belongsToMany(User, {
  //     through: "ProductUser",
  //     foreignKey: "ProductId",
  //   });
  // }
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

export default Order;
