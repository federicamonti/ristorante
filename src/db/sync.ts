// sync.ts
import sequelizeConnection from './config';
import Cliente from './models/cliente';
import Prenotazione from './models/prenotazione';
import Tavolo from './models/tavolo';

const syncDatabase = async () => {
  try {
    await sequelizeConnection.authenticate();
    console.log('Connection has been established successfully.');
    await sequelizeConnection.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

syncDatabase();

// Associazioni
Tavolo.hasMany(Prenotazione, { foreignKey: 'tavoloId' });
Prenotazione.belongsTo(Tavolo, { foreignKey: 'tavoloId' });

Cliente.hasMany(Prenotazione, { foreignKey: 'clienteId' });
Prenotazione.belongsTo(Cliente, { foreignKey: 'clienteId' });