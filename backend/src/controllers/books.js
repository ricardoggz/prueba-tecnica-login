import { pool } from '../database/database.js'

export const getBooks = (req, res)=>{
    pool.query('SELECT * FROM libros')
    .then(resp=> res.json(resp.rows))
    .catch(err=>res.json(err))
}

export const addBook = (req, res)=>{
    pool.query(`
        INSERT INTO libros(
        "LIBRO_ID",
        "LIBRO_NOMBRE")
        VALUES(
            '${req.body.LIBRO_ID}',
            '${req.body.LIBRO_NOMBRE}'            
        )`)
    .then(resp=> res.json({message: 'Libro agregado con éxito'}))
    .catch(err=>res.json(err))
}

export const editBook = (req, res)=>{
    pool.query(`
        UPDATE libros
        SET
        "LIBRO_ID" = '${req.body.LIBRO_ID}',
        "LIBRO_NOMBRE" = '${req.body.LIBRO_NOMBRE}'        
        WHERE "LIBRO_ID" = '${req.params.id}'
    `)
    .then(resp=>res.json({message: 'Libro actualizado correctamente'}))
    .catch(err=> res.json(err))
}

export const deleteBook = (req, res)=>{
    pool.query(`
        DELETE FROM libros
        WHERE
        "LIBRO_ID" = '${req.body.LIBRO_ID}'        
    `)
    .then((resp=> res.json({message: 'Libro eliminado correctamente'})))
    .catch(err=> res.json(err))
}