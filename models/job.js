const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const Job = sequelize.define(
        "Job",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            helperCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            empName: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            fdw: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            race: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            salary: {
                type: Datatypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            daysOff: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            probation: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            houseType: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            bedroom: {
                type: Datatypes.STRING,
            },
            toilet: {
                type: Datatypes.STRING,
            },
            family: {
                type: Datatypes.STRING,
            },
            babies: {
                type: Datatypes.STRING,
            },
            childBelow12: {
                type: Datatypes.STRING,
            },
            childBelow5: {
                type: Datatypes.STRING,
            },
            fetchChild: {
                type: Datatypes.STRING,
            },
            downstairs: {
                type: Datatypes.STRING,
            },
            busOnly: {
                type: Datatypes.STRING,
            },
            lookElderly: {
                type: Datatypes.STRING,
            },
            healthy: {
                type: Datatypes.STRING,
            },
            assist: {
                type: Datatypes.STRING,
            },
            bedridden: {
                type: Datatypes.STRING,
            },
            generalHouseWork: {
                type: Datatypes.STRING,
            },
            iron: {
                type: Datatypes.STRING,
            },
            cook: {
                type: Datatypes.STRING,
            },
            clothes: {
                type: Datatypes.STRING,
            },
            carWash: {
                type: Datatypes.STRING,
            },
            pets: {
                type: Datatypes.STRING,
            },
            garden: {
                type: Datatypes.STRING,
            },
            jobRemarks: {
                type: Datatypes.STRING,
            },
            helperNameSign: {
                type: Datatypes.STRING,
            },
            empNameSign: {
                type: Datatypes.STRING,
            },
            imageURL: {
                type: Datatypes.BLOB,
            },
        },
    );
    
    return Job;
};