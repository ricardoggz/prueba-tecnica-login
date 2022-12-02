import { Router } from 'express'
import { getOrders, addOrder, editOrder, deleteOrder } from '../controllers/orders.js'
export const orderRouter = Router()
orderRouter.get('/orders', getOrders)
orderRouter.post('/add-order', addOrder)
orderRouter.put('/edit-order/:id', editOrder)
orderRouter.delete('/delete-order', deleteOrder)