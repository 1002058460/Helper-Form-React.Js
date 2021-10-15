const { DataTypes } = require('sequelize');

module.exports = (sequelize, Datatypes) => {
    const EmploymentHistory = sequelize.define(
        "employment_history",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            country: {
                type: Datatypes.STRING,
            },
            employer: {
                type: Datatypes.STRING,
            },
            workDuties: {
                type: Datatypes.STRING,
            },
            remark: {
                type: Datatypes.STRING,
            },
            yearStart: {
                type: Datatypes.STRING,
            },
            yearEnd: {
                type: Datatypes.STRING,
            },
        }
    );
    
    return EmploymentHistory;
};