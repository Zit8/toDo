const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Staf }) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.belongsTo(Staf, {
        foreignKey: 'stafId',
      });
    }
  }
  Basket.init({
    stafId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
