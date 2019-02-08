'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'User', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        registeredEvt: Sequelize.INTEGER,
        email: Sequelize.STRING,
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, 
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};
