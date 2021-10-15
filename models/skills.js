const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const Skills = sequelize.define(
        "Skills",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            areasWork: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            subSkillsId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Subskills',
                    key: 'id'
                },
            },
        },
    );
    
    return Skills;
};