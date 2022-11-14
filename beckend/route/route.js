import express from 'express'
import {getKategori, 
    addKategori, 
    updateKategori,
    getByIDKategori,
    deletKategori
} from '../controllers/kategoriController.js'

const router = express.Router();

router.get('/kategori', getKategori)
router.get('/kategori/:id', getByIDKategori)
router.post('/kategori', addKategori)
router.patch('/kategori/:nama_kategori', updateKategori)
router.delete('/kategori/:id', deletKategori)




export default router