module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { min: 0 },
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
  return Review;
};
