module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define(
    'Reviews',
    {
      body: DataTypes.STRING,
    },
    {}
  );
  Reviews.associate = models => {
    // associations can be defined here
  };
  return Reviews;
};
