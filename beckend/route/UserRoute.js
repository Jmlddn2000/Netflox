import express from "express"
import {
    getKategori1,
    getfilm,
<<<<<<< Updated upstream
    getartis
=======
    getartis,
    getIdFilm,
    addFilm,
    deletFilm,
    getIdKategori,
    addKategori,
    deleteKategori,
    getIdArtis,
    addartis,
    deleteartis
>>>>>>> Stashed changes
} 
from "../controllers/Controllers.js"

const router = express.Router();

router.get('/kategori1',getKategori1)
router.get('/film',getfilm)

//film
router.get('/artis',getartis)
router.get('/artis/:id_artis' ,getidartis)
router.post('/artis',addartis)
router.delete('/artis/:id_artis' ,deleteartis)



<<<<<<< Updated upstream
=======
// artis
router.get('/artis',getartis)
router.get('/artis/:id',getIdArtis)
router.post('/artis',addartis)
router.delete('/artis/:id',deleteartis)
>>>>>>> Stashed changes



export default router


