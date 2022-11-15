const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("game", {
    team1: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    team2: {
      type: DataTypes.STRING(40),
      allowNull: false,
    }
  });
};
