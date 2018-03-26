module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {}
  );
  User.associate = models => {
    User.hasOne(models.Business, {
      foreignKey: 'userId',
      as: 'business',
    });
  };
  return User;
};
