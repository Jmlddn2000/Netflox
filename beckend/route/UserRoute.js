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
router.get('/artis',getartis)






export default router


