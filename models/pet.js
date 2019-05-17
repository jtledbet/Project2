

module.exports = function (sequelize, DataTypes) {
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
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] },
      defaultValue: "assets/img/default.jpg",
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] },
      defaultValue: "loves hang-gliding"
    }
  });

  return Pet;
}