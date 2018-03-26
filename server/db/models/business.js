module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    'Business',
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      contact: DataTypes.STRING,
      address: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {}
  );
  Business.associate = models => {
    Business.hasMany(models.Review, {
      as: 'Reviews',
    });
  };
  return Business;
};
