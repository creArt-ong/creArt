/** modulos */
import express from 'express'

/** instancias */
const router = express.Router()

/** Ruta inicial */
router.get('/', (req, res) => {
    res.render("index")
})

// ================Paises de actuacion ===========


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



/** Exportar router */
export default router