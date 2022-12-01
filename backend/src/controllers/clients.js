import { pool } from '../database/database.js'

export const getClients = (req, res)=>{
    pool.query('SELECT * FROM clients')
    .then(resp=> res.json(resp.rows))
    .catch(err=>res.json(err))
}

export const addClient = (req, res)=>{
    pool.query(`
        INSERT INTO clients(
        "CLIENTE_ID",
        "CLIENTE_NOMBRE",
        "CLIENTE_USUARIO",
        "CLIENTE_CONTRASENA")
        VALUES(
            '${req.body.CLIENTE_ID}',
            '${req.body.CLIENTE_NOMBRE}',
            '${req.body.CLIENTE_USUARIO}',
            '${req.body.CLIENTE_CONTRASENA}'
        )`)
    .then(resp=> res.json({message: 'Cliente agregado con éxito'}))
    .catch(err=>res.json(err))
}

export const editClient = (req, res)=>{
    pool.query(`
        UPDATE clients
        SET
        "CLIENTE_ID" = '${req.body.CLIENTE_ID}',
        "CLIENTE_NOMBRE" = '${req.body.CLIENTE_NOMBRE}',
        "CLIENTE_USUARIO" = '${req.body.CLIENTE_USUARIO}',
        "CLIENTE_CONTRASENA" = '${req.body.CLIENTE_CONTRASENA}'
        WHERE "CLIENTE_ID" = '${req.params.id}'
    `)
    .then(resp=>res.json({message: 'Cliente actualizado correctamente'}))
    .catch(err=> res.json(err))
}

export const deleteClient = (req, res)=>{
    pool.query(`
        DELETE FROM clients
        WHERE
        "CLIENTE_USUARIO" = '${req.body.CLIENTE_USUARIO}'
        AND
        "CLIENTE_CONTRASENA" = '${req.body.CLIENTE_CONTRASENA}'
    `)
    .then((resp=> res.json({message: 'Cliente eliminado correctamente'})))
    .catch(err=> res.json(err))
}

export const loginClient = (req, res)=>{
    pool.query(`
        SELECT
        "CLIENTE_USUARIO",
        "CLIENTE_CONTRASENA"
        FROM clients
        WHERE "CLIENTE_USUARIO" = '${req.body.CLIENTE_USUARIO}'
        AND "CLIENTE_CONTRASENA" = '${req.body.CLIENTE_CONTRASENA}'
    `)
    .then(resp => res.json(resp.rows))
    .catch(err=> res.json(err))
}