module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      title: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
};
