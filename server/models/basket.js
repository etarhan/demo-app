'use strict';
module.exports = (sequelize, DataTypes) => {
  var Basket = sequelize.define('Basket', {
    command_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Basket.associate = function(models) {
    // associations can be defined here
    // Basket.hasMany(models.Product, { foreignKey: 'product_id', as: 'products' });
    // Basket.belongsTo(models.Command, { foreignKey: 'command_id', as: 'commands' });
  };
  return Basket;
};