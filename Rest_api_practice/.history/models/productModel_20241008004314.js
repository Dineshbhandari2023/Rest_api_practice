module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "products",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
};
