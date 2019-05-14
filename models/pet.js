var passport = require('passport');
var sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] }
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] }
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] }
    },
    scores: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { len: [1] }
    }
  });
  
  return Pet;
}