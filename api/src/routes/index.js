const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const allDogs = require("../controllers/allDogs")
const crearDog = require("../controllers/crearDog")
const nameDogs = require("../controllers/nameDogs")
const razas = require("../controllers/razas")
const allTemperaments = require("../controllers/temperamentos")
// const deleteDog = require("../controllers/deleteDog")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", allDogs)
router.post("/dogs", crearDog)
router.get("/dogs/:id", razas) //ID de la raza, cambiar 
router.get("/dogs/name", nameDogs)
router.get("/temperaments", allTemperaments)
// router.put()
// router.delete("/dogs/:idRaza", deleteDog)

module.exports = router;
