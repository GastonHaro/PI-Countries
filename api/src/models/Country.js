const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          isUrl: true,
      }
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isDecimal: true
      }
    }
  }, { timestamps: false });
};
