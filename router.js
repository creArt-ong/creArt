/** modulos */
import express from 'express'

/** instancias */
const router = express.Router()

/** Ruta inicial */
router.get('/', (req, res) => {
    res.render("index")
})


router.get('/paises-actuacion', (req, res) =>{
    res.render('paises-actuacion')
})

router.get('/palestina', (req, res) =>{
    res.render('palestina')
})

router.get('/iran', (req, res) =>{
    res.render('iran')
})

router.get('/afganistan', (req, res) =>{
    res.render('afganistan')
})


/** Exportar router */
export default router