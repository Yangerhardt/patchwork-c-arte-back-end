import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { v4 as uuidv4 } from "uuid";
import Order from "./Order";

const categoryType = ["Toalha", "Bolsa", "Capa", "Jogo Americano", "Máscara"];

class Product extends Model {
  public id!: string;
  public name!: string;
  public price!: number;
  public available!: boolean;
  public category!: string;
  public image!: string;
  public weight!: number;
  public height!: number;
  public width!: number;
  public material!: string;
  public description!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    category: {
      type: DataTypes.ENUM,
      values: categoryType,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    height: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    width: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Tecido",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: true,
  }
);

export default Product;
