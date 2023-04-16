const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Staf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket, User }) {
      this.hasMany(Basket, {
        foreignKey: 'stafId',
      });
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Staf.init({
    stafName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    photo: DataTypes.TEXT,
    count: DataTypes.INTEGER,
    countmin: DataTypes.INTEGER,
    opisanie: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Staf',
  });
  return Staf;
};
