/** modulos */
import express from 'express'
import router from './router.js'
import path from 'path'
import mysql from 'mysql'


/** Constantes */
const app = express()
const port = 3000

/** Archivos que se van a utilizar */
app.use(router);
app.use(express.static('public'));
app.set('view engine', 'ejs')

/** Iniciar el servidor */
app.listen(port, () =>{
    console.log(`servidor en http://localhost:${port}`);
    })
    