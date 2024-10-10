module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "node_sequelize_api_db",
  dialect: "mysql", // Choose either "mysql" or "postgres" or any other database

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
