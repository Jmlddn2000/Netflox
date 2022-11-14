import express from 'express'
import {getKategori, 
    addKategori, 
    updateKategori,
    getByIDKategori,
    deletKategori,
} from '../controllers/kategoriController.js'

import {
    getFilmArtis,
    addFilmArtis,
    getByIDfilmArtis,
    deletFilmArtis
} from '../controllers/Film_artisController.js'

const router = express.Router();

// Kategori
router.get('/kategori', getKategori)
router.get('/kategori/:id', getByIDKategori)
router.post('/kategori', addKategori)
router.patch('/kategori/:nama_kategori', updateKategori)
router.delete('/kategori/:id', deletKategori)

// FIlm Artis
router.get('/filmArtis', getFilmArtis)
router.post('/filmArtis', addFilmArtis)
router.get('/filmArtis/:id_film_artis', getByIDfilmArtis)
router.delete('/filmArtis/:id_film_artis', deletFilmArtis)








export default router