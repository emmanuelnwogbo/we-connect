module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define(
    'Reviews',
    {
      body: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {}
  );
  Reviews.associate = models => {
    Reviews.belongsTo(models.User, { as: 'user' });
  };
  return Reviews;
};
