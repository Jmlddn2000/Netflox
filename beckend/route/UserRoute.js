import express from "express"
import {
    getKategori1,
    getfilm,
    getartis,
    getIdFilm,
    addFilm,
    deletFilm
} 
from "../controllers/Controllers.js"

const router = express.Router();

// kategori
router.get('/kategori1',getKategori1)

// artis
router.get('/artis',getartis)


// film
router.get('/film',getfilm)
router.get('/film/:id_film',getIdFilm)
router.post('/film',addFilm)
router.delete('/film/:id_film',deletFilm)

export default router


