const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.TIME,
            allowNull: true,
            Comment: ''
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['summer', 'winter', 'autumn', 'spring']]
            }
        },
    }, { timestamps: false })
}