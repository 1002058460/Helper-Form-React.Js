const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const SkillsSEA = sequelize.define(
        "SkillsSEA",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            infants1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            infants2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            infantsText: {
                type: Datatypes.STRING,
            },
            careElderly1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careElderly2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careElderlyText: {
                type: Datatypes.STRING,
            },
            careDisabled1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careDisabled2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            careDisabledText: {
                type: Datatypes.STRING,
            },
            genHouse1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            genHouse2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            genHouseText: {
                type: Datatypes.STRING,
            },
            cooking1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            cooking2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            cookingText: {
                type: Datatypes.STRING,
            },
            lang1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lang2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            langText1: {
                type: Datatypes.STRING,
            },
            langText2: {
                type: Datatypes.STRING,
            },
            otherSkills1: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            otherSkills2: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            otherSkillsText1: {
                type: Datatypes.STRING,
            },
            otherSkillsText2: {
                type: Datatypes.STRING,
            },
        },
    );
    
    return SkillsSEA;
};