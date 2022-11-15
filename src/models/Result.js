const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("result", {
    userUbication: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    team1Result: {
      type: DataTypes.INT,
      allowNull: false,
    },
    team2Result: {
        type: DataTypes.INT,
      allowNull: false,
    }
  });
};
