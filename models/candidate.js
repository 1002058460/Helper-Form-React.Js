const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const Candidate = sequelize.define(
        "Candidate",
        {
            idKey: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            photo: {
                type: Datatypes.BLOB,
            },
            linkVideo: {
                type: Datatypes.STRING,
            },
            passportStatus: {
                type: Datatypes.STRING,
            },
            bioFee: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            loan: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            pocketMoney: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            minimumSalary: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            maritalStatus: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            experienceInSG: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            skills: {
                type: Datatypes.STRING,
            },
            remarks: {
                type: Datatypes.STRING,
            },
            fullName: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            dateOfBirth: {
                type: Datatypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            placeOfBirth: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            height: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            weight: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            nationality: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            phoneNumber: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            address: {
                type: Datatypes.STRING,
            },
            port: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            religion: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            education: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            siblings: {
                type: Datatypes.STRING,
            },
            ageOfChild: {
                type: Datatypes.STRING,
            },
            status: {
                type: Datatypes.STRING,
                defaultValue: "AVAILABLE" 
            }
        },
    );
    
    return Candidate;
};