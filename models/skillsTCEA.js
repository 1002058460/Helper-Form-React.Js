const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const SkillsTCEA = sequelize.define(
        "SkillsTCEA",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            infants3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            infants4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            infantsTextB: {
                type: Datatypes.STRING,
            },
            careElderly3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careElderly4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careElderlyTextB: {
                type: Datatypes.STRING,
            },
            careDisabled3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careDisabled4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careDisabledTextB: {
                type: Datatypes.STRING,
            },
            genHouse3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            genHouse4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            genHouseTextB: {
                type: Datatypes.STRING,
            },
            cooking3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            cooking4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            cookingTextB: {
                type: Datatypes.STRING,
            },
            lang3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lang4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            langText3: {
                type: Datatypes.STRING,
            },
            langText4: {
                type: Datatypes.STRING,
            },
            otherSkills3: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            otherSkills4: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            otherSkillsText3: {
                type: Datatypes.STRING,
            },
            otherSkillsText4: {
                type: Datatypes.STRING,
            },
        },
    );
    
    return SkillsTCEA;
};