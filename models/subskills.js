const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const Subskills = sequelize.define(
        "Subskills",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            willingness: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            experience: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            assesment: {
                type: Datatypes.STRING,
            },
            language: {
                type: Datatypes.STRING,
            },
            otherSkills: {
                type: Datatypes.STRING,
            },
        },
    );
    
    return Subskills;
};