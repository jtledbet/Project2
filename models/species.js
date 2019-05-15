var sequelize = require('sequelize');


module.exports = function (sequelize, DataTypes) {
    var Species = sequelize.define("Species", {
        species: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        },
        scores: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        }
    });

    return Species;
}