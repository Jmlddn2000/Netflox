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
    deleteKategori,
    addartis,
    getIdArtis,
    deleteartis

} 
from "../controllers/Controllers.js"

const router = express.Router();

router.get('/kategori',getKategori)
router.get('/kategori/:id',getIdKategori)
router.post('/kategori',addKategori)
router.delete('/kategori/:id',deleteKategori)


// film
router.get('/film',getfilm)
router.get('/film/:id_film',getIdFilm)
router.post('/film',addFilm)
router.delete('/film/:id_film',deletFilm)

// artis
router.get('/artis',getartis)
router.get('/artis/:id_artis', getIdArtis)
router.post('/artis',addartis)
router.delete('/artis/:id_artis', deleteartis)




export default router


