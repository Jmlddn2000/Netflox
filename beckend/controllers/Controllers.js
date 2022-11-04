import db from "../config/DATABASE.js"
import response from '../response.js';

export const getKategori1 = (req, res) => {
    db.query("SELECT * FROM kategori", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}

export const getfilm = (req, res) => {
    db.query("SELECT * FROM film", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}

export const getartis = (req, res) => {
    db.query("SELECT * FROM artis", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}