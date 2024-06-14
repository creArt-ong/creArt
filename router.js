/** modulos */
import express from 'express'

/** instancias */
const router = express.Router()

/** Ruta inicial */
router.get('/', (req, res) => {
    res.send("index de creart")
})


router.get('/paises-actuacion', (req, res) =>{
    res.render('paises-actuacion')
})






/** Exportar router */
export default router