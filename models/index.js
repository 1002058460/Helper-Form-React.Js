const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.job = require("./job")(sequelize, Sequelize);

module.exports = db;