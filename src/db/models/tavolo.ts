import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../config';

// Class definition using Model with type inference
class Tavolo extends Model<InferAttributes<Tavolo>, InferCreationAttributes<Tavolo>> {
  declare id: CreationOptional<number>;
  declare numero: number;
  declare capacita: number;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
  declare deletedAt?: CreationOptional<Date>;
}

Tavolo.init(
{
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    numero: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    capacita: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize: sequelize,
    paranoid: true,
  }
);

export default Tavolo;
