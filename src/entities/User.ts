import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";
import { UUID } from "crypto";

class User extends Model {
  public id!: UUID;
  public created_at!: Date;
  public updated_at!: Date;
  public deleted!: boolean;
  public deleted_at!: Date;
  public name!: string;
  public role!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public zip!: string;
  public neighborhood!: string;
  public street!: string;
  public streetNumber!: string;
  public streetComplement!: string;
  public city!: string;
  public state!: string;

  // static associate() {
  //   this.belongsToMany(Product, {
  //     through: "UserProduct",
  //     foreignKey: "userId",
  //   });
  // }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },

    deleted_at: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
    },

    role: {
      type: DataTypes.ENUM,
      values: ["USER", "ADMIN", "GUEST"],
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "email",
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isStrongPassword: {
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
          errorMessage:
            "Password must have at least 1 lowerCase, 1 upperCase, 1 symbol and 1 number",
        },
      },
    },
    zip: {
      type: DataTypes.STRING(8),
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "Must be only numbers",
        },
      },
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: "Must be only numbers",
        },
      },
    },
    streetComplement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

// User.associate();

export default User;
