import { Sequelize } from 'sequelize';

const db = new Sequelize('express_event_db', 'root', 'usbw', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
