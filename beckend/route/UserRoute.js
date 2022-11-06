import express from "express"
import {
    getKategori1,
    getfilm,
    getartis
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






export default router


