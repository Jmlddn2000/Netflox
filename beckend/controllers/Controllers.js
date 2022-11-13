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
<<<<<<< Updated upstream
}
=======
}

export const getIdArtis = (req, res) => {
    db.query("SELECT * FROM film WHERE id_artis = ?",[req.params.id_artis] , (err, result) => {
        console.log(result)
        response(200, result, `get artis id `, res )
    })
}

export const addartis = (req, res) => {
    const sql = [ 
        req.body.id_artis, 
        req.body.nama_lengkap, 
        req.body.gambar
    ]
    db.query("INSERT INTO artis(id_artis, nama_lengkap, gambar) VALUES (?,?,?)",sql , (err, result) => {
        console.log(result)
        response(200, "", ` ADD ARTIS SUCSESS `, res )
    })
}

export const deleteartis = (req, res) => {
    db.query("DELETE FROM film WHERE id_artis = ?",[req.params.id_artis] , (err, result) => {
        console.log(result)
        response(200, result, `DELETE ARTIS SUCSESS `, res )
    })
}




// kategori

export const getKategori = (req, res) => {
    db.query("SELECT * FROM kategori", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
}

export const getIdKategori = (req, res) => {
    db.query("SELECT * FROM kategori WHERE id = ?",[req.params.id] , (err, result) => {
        console.log(result)
        response(200, result, `get kategori id `, res )
    })
}

export const addKategori = (req, res) => {
    const sql = [
        req.body.id,
        req.body.nama_kategori
    ]
    db.query("INSERT INTO kategori (id, nama_kategori) VALUES (?, ?)",sql , (err, result) => {
        console.log(result)
        response(200, "", ` ADD KATEGORI SUCSESS `, res )
    })
}

export const deleteKategori = (req, res) => {
    db.query("DELETE FROM kategori WHERE id = ?",[req.params.id] , (err, result) => {
        console.log(result)
        response(200, result, `DELETE KATEGORI SUCSESS `, res )
    })
}



>>>>>>> Stashed changes
