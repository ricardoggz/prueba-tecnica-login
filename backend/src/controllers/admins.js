import { pool } from '../database/database.js'

export const getAdmins = (req, res)=>{
    pool.query('SELECT * FROM admins')
    .then(resp=> res.json(resp.rows))
    .catch(err=>res.json(err))
}

export const addAdmin = (req, res)=>{
    pool.query(`
        INSERT INTO admins(
        "ADMIN_ID",
        "ADMIN_NOMBRE",
        "ADMIN_USUARIO",
        "ADMIN_CONTRASENA")
        VALUES(
            '${req.body.ADMIN_ID}',
            '${req.body.ADMIN_NOMBRE}',
            '${req.body.ADMIN_USUARIO}',
            '${req.body.ADMIN_CONTRASENA}'
        )`)
    .then(resp=> res.json({message: 'Admin agregado con éxito'}))
    .catch(err=>res.json(err))
}

export const editAdmin = (req, res)=>{
    pool.query(`
        UPDATE admins
        SET
        "ADMIN_ID" = '${req.body.ADMIN_ID}',
        "ADMIN_NOMBRE" = '${req.body.ADMIN_NOMBRE}',
        "ADMIN_USUARIO" = '${req.body.ADMIN_USUARIO}',
        "ADMIN_CONTRASENA" = '${req.body.ADMIN_CONTRASENA}'
        WHERE "ADMIN_ID" = '${req.params.id}'
    `)
    .then(resp=>res.json({meesage: 'Admin actualizado correctamente'}))
    .catch(err=> res.json(err))
}

export const deleteAdmin = (req, res)=>{
    pool.query(`
        DELETE FROM admins
        WHERE
        "ADMIN_USUARIO" = '${req.body.ADMIN_USUARIO}'
        AND
        "ADMIN_CONTRASENA" = '${req.body.ADMIN_CONTRASENA}'
    `)
    .then((resp=> res.json({message: 'Admin eliminado correctamente'})))
    .catch(err=> res.json(err))
}

export const loginAdmin = (req, res)=>{
    pool.query(`
        SELECT
        "ADMIN_USUARIO",
        "ADMIN_CONTRASENA"
        FROM admins
        WHERE "ADMIN_USUARIO" = '${req.body.ADMIN_USUARIO}'
        AND "ADMIN_CONTRASENA" = '${req.body.ADMIN_CONTRASENA}'
    `)
    .then(resp => res.json(resp.rows))
    .catch(err=> res.json(err))
}