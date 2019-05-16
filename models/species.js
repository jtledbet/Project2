var sequelize = require('sequelize');


module.exports = function (sequelize, DataTypes) {
    var Species = sequelize.define("Species", {
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
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { len: [1] }
        }
    });

    return Species;
}