import express from "express"
import {
    getKategori,
    getfilm,
    getartis,
    getIdFilm,
    addFilm,
    deletFilm,
    getIdKategori,
    addKategori,
    deleteKategori
} 
from "../controllers/Controllers.js"

const router = express.Router();


// kategori
router.get('/kategori',getKategori)
router.get('/kategori/:id',getIdKategori)
router.post('/kategori',addKategori)
router.delete('/kategori/:id',deleteKategori)



// artis
router.get('/artis',getartis)


// film
router.get('/film',getfilm)
router.get('/film/:id_film',getIdFilm)
router.post('/film',addFilm)
router.delete('/film/:id_film',deletFilm)

export default router


