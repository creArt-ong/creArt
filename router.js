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

router.get('/palestina', (req, res) =>{
    res.render('palestina')
})

router.get('/iran', (req, res) =>{
    res.render('iran')
})

router.get('/afganistan', (req, res) =>{
    res.render('afganistan')
})

router.get('/senegal', (req, res) =>{
    res.render('senegal')
})

router.get('/tailandia', (req, res) =>{
    res.render('tailandia')
})

router.get('/Mexico', (req, res) =>{
    res.render('mexico')
})

/** Exportar router */
export default router