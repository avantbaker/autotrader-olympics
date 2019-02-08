'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event', 
    {
      name: DataTypes.STRING,
      imgSrc: DataTypes.STRING,
      time: DataTypes.STRING,
      place: DataTypes.STRING,
      registrees: DataTypes.ARRAY(DataTypes.INTEGER),
    }, 
    {}
  );
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasMany(models.User);
    
  };
  return Event;
};