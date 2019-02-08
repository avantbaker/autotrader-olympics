'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Team', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: Sequelize.STRING,
        members: Sequelize.ARRAY(Sequelize.INTEGER),
        color: Sequelize.STRING,
        imgSrc: Sequelize.STRING,
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
    return queryInterface.dropTable('Team');
  }
};
