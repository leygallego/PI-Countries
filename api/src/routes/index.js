const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const country = require('./countries')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", country);


module.exports = router;
