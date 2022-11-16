const { Router } = require("express");
const router = Router();
//import rutas
const charactersRouter = require("./characters.js");

router.use("/characters", charactersRouter);

module.exports = router;
