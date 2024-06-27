import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from '../config';

// Class definition using Model with type inference
class Prenotazione extends Model<InferAttributes<Prenotazione>, InferCreationAttributes<Prenotazione>> {
  declare id: CreationOptional<number>;
  declare tavoloId: number;
  declare clienteId: number;
  declare dataOra: Date;
  declare createdAt?: CreationOptional<Date>;
  declare updatedAt?: CreationOptional<Date>;
  declare deletedAt?: CreationOptional<Date>;
}

Prenotazione.init(
{
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    tavoloId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    clienteId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    dataOra: {
      type: DataTypes.DATE,
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


export default Prenotazione;
