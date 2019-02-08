'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Event', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: Sequelize.STRING,
        imgSrc: Sequelize.STRING,
        time: Sequelize.STRING,
        place: Sequelize.STRING,
        registrees: Sequelize.ARRAY(Sequelize.INTEGER),
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
    return queryInterface.dropTable('Event');
  }
};
