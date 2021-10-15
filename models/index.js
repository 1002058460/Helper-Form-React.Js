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

db.candidate = require("./candidate")(sequelize, Sequelize);
db.employmentHistory = require("./employmentHistory")(sequelize, Sequelize);
db.medicalHistory = require("./medicalHistory")(sequelize, Sequelize);
db.skillsSEA = require("./skillsSEA")(sequelize, Sequelize);
db.skillsTCEA = require("./skillsTCEA")(sequelize, Sequelize);
// db.subskills = require("./subskills")(sequelize, Sequelize);
// db.skills = require("./skills")(sequelize, Sequelize);

module.exports = db;