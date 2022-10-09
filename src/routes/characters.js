const { Router } = require("express");
const router = Router();
const { Character } = require("../db");

router.get("/", async (req, res) => {
  const query = req.query;

  try {
    if(Object.keys(query)){
      const charactersFind = await Character.findAll({
        where: {
          [Object.keys(query).toString().toLowerCase()]: Object.values(query).toString().toLowerCase()
        },
      });
      if(charactersFind){
        res.status(200).send(charactersFind);
      }else{
        res.status(404).send("No encontramos ese personaje :(")
      }
    }else{
      const characters = await Character.findAll();
      if(characters.length){
        res.status(200).send(characters);
      }else{
        res.status(404).send("No hay personajes disponibles :(")
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  const { name, role, png, images, abilities, description, country } = req.body;
  try {
    await Character.create({
      name: name.toLowerCase(), 
      role: role.toLowerCase(),
      png,
      images,
      description,
      abilities,
      country
    })
    res.status(200).send("Personaje creado exitosamente");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { role, png, images, abilities, description, country } = req.body;

  try {
    const editedChar = await Character.findOne({where: {
      id: id
    }})
    if(editedChar){
      await editedChar.update({
        role: role.toLowerCase(),
        png,
        images,
        description,
        abilities,
        country
      })
      res.status(200).send("Personaje actualizado exitosamente");
    }else{
      res.status(404).send("No encontramos el personaje que deseabas modificar");
    }
  } catch (error) {
    res.status(400).send(error);
  }
})
module.exports = router;
