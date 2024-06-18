/** modulos */
import express from 'express'

/** instancias */
const router = express.Router()

/** Ruta inicial */
router.get('/', (req, res) => {
    res.render("index")
})

// ================Paises de actuacion ===========

// router.get('/paises-actuacion', (req, res) =>{
//     res.render('paises-actuacion')
// })

router.get('/:ruta', (req, res) => {
    let ruta = req.params.ruta; // Obtener el parámetro 'ruta' de la URL

    // Simulación de error (por ejemplo, si la ruta no es válida)
    if (ruta === 'error') {
        // Renderizar la vista de error
        res.status(404).render('error', { message: 'Página no encontrada' });
    } else {
        // Renderizar la vista correspondiente a la ruta
        res.render(ruta);
    }
});



// router.get('/iran', (req, res) =>{
//     res.render('iran')
// })

// router.get('/afganistan', (req, res) =>{
//     res.render('afganistan')
// })

// router.get('/senegal', (req, res) =>{
//     res.render('senegal')
// })

// router.get('/tailandia', (req, res) =>{
//     res.render('tailandia')
// })

// router.get('/mexico', (req, res) =>{
//     res.render('mexico')
// })
// ================Nuestros proyectos ===========
// router.get('/nuestros-proyectos', (req, res) =>{
//     res.render('nuestros-proyectos')
// })

// router.get('/cooperacion-internacional', (req, res) =>{
//     res.render('cooperacion-internacional')
// })

// router.get('/justicia-global', (req, res) =>{
//     res.render('justicia-global')
// })
/** Exportar router */
export default router