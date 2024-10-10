module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      title: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
};
