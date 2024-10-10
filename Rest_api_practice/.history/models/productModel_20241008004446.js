module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    timeStamp: false,
  );
};
