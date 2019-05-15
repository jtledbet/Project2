var sequelize = require('sequelize');


module.exports = function (sequelize, DataTypes) {
    var Species = sequelize.define("Species", {
        species: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { len: [1] }
        }
    });

    return Species;
}