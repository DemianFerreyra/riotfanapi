const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    name: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("duelista", "iniciador","centinela","controlador"),
      allowNull: false,
    },
    png:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images:{
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    abilities:{
      type: DataTypes.JSON,
      allowNull: true,
    },
    country:{
      type: DataTypes.JSON,
      allowNull: false,
    }
  });
};
