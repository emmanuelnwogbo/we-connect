module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    'Business',
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      contact: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  Business.associate = models => {
    // associations can be defined here
  };
  return Business;
};
