'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    'Team', 
    {
      name: DataTypes.STRING,
      members: DataTypes.ARRAY(DataTypes.INTEGER),
      color: DataTypes.STRING,
      imgSrc: DataTypes.STRING
    }, 
    {}
  );
  Team.associate = function(models) {
    // associations can be defined here
    Team.hasMany(models.User)
  };
  return Team;
};