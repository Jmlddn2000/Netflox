import db from "../config/DATABASE.js"
import response from '../response.js';

export const getKategori1 = (req, res) => {
    db.query("SELECT * FROM kategori", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}

// film
export const getfilm = (req, res) => {
    db.query("SELECT * FROM film", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}

export const getIdFilm = (req, res) => {
    db.query("SELECT * FROM film WHERE id_film = ?",[req.params.id_film] , (err, result) => {
        console.log(result)
        response(200, result, `get film id `, res )
    })
}

export const addFilm = (req, res) => {
    const sql = [
        req.body.id_film, 
        req.body.id_kategori, 
        req.body.title, 
        req.body.durasi, 
        req.body.umur, 
        req.body.tahun_terbit,
        req.body.overview,
        req.body.descripsi,
        req.body.garis_cerita,
        req.body.gambar
    ]
    db.query("INSERT INTO film (id_film, id_kategori, title, durasi,umur,tahun_terbit, overview,descripsi,garis_cerita,gambar) VALUES (?,?,?,?,?,?,?,?,?,?)",sql , (err, result) => {
        console.log(result)
        response(200, "", ` ADD FILM SUCSESS `, res )
    })
}

export const deletFilm = (req, res) => {
    db.query("DELETE FROM film WHERE id_film = ?",[req.params.id_film] , (err, result) => {
        console.log(result)
        response(200, result, `DELET film SUCSESS `, res )
    })
}



// artis
export const getartis = (req, res) => {
    db.query("SELECT * FROM artis", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}
