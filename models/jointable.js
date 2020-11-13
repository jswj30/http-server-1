'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinTable extends Model {
    static associate(models) {
      JoinTable.belongsTo(models.Todo, { foreignKey: 'todoId' });
      JoinTable.belongsTo(models.Complete, { foreignKey: 'completeId' });
    }
  };
  JoinTable.init({
    todoId: DataTypes.INTEGER,
    completeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JoinTable',
  });
  return JoinTable;
};