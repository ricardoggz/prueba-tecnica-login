import { pool } from '../database/database.js'

export const getOrders = (req, res)=>{
    pool.query(`
    SELECT
    pedidos."PEDIDO_ID",
    pedidos."CLIENTE_ID",
    pedidos."PEDIDO_FECHA",
    pedidos."LIBRO_ID",
    libros."LIBRO_NOMBRE",
    clients."CLIENTE_NOMBRE",
    clients."CLIENTE_USUARIO"
    FROM pedidos
    INNER JOIN libros
    ON pedidos."LIBRO_ID" = libros."LIBRO_ID"
    INNER JOIN clients
    ON pedidos."CLIENTE_ID" = clients."CLIENTE_ID"
    `)
    .then(resp=> res.json(resp.rows))
    .catch(err=>res.json(err))
}

export const addOrder = (req, res)=>{
    pool.query(`
        INSERT INTO pedidos(
        "PEDIDO_ID",
        "CLIENTE_ID",
        "PEDIDO_FECHA",
        "LIBRO_ID")
        VALUES(
            '${req.body.PEDIDO_ID}',
            '${req.body.CLIENTE_ID}',
            '${req.body.PEDIDO_FECHA}',
            '${req.body.LIBRO_ID}'
        )`)
    .then(resp=> res.json({message: 'Pedido agregado con éxito'}))
    .catch(err=>res.json(err))
}

export const editOrder = (req, res)=>{
    pool.query(`
        UPDATE pedidos
        SET
        "PEDIDO_ID" = '${req.body.PEDIDO_ID}',
        "CLIENTE_ID" = '${req.body.CLIENTE_ID}',
        "PEDIDO_FECHA" = '${req.body.PEDIDO_FECHA}',
        "LIBRO_ID" = '${req.body.LIBRO_ID}'
        WHERE "PEDIDO_ID" = '${req.params.id}'
    `)
    .then(resp=>res.json({meesage: 'Pedido actualizado correctamente'}))
    .catch(err=> res.json(err))
}

export const deleteOrder = (req, res)=>{
    pool.query(`
        DELETE FROM pedidos
        WHERE
        "PEDIDO_ID" = '${req.body.PEDIDO_ID}'
    `)
    .then((resp=> res.json({message: 'Pedido eliminado correctamente'})))
    .catch(err=> res.json(err))
}