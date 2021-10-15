const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const MedicalHistory = sequelize.define(
        "Medical_History",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            allergies: {
                type: Datatypes.STRING,
            },
            mentalIllness: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            epilepsy: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            asthma: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            diabetes: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            hypertension: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            tubercolosis: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            heartDisease: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            malaria: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            operations: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            otherIllness: {
                type: Datatypes.STRING,
            },
            disabilities: {
                type: Datatypes.STRING,
            },
            diet: {
                type: Datatypes.STRING,
            },
            pork: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            beef: {
                type: Datatypes.CHAR,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            otherFoods: {
                type: Datatypes.STRING,
            },
            preference: {
                type: Datatypes.STRING,
            },
            remarkFood: {
                type: Datatypes.STRING,
            },
        },
    );
    
    return MedicalHistory;
};