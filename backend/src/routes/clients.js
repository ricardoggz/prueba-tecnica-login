import { Router } from 'express'
import { getClients, addClient, editClient, deleteClient, loginClient } from '../controllers/clients.js'
export const clientRouter = Router()
clientRouter.get('/clients', getClients)
clientRouter.post('/add-client', addClient)
clientRouter.post('/client-login', loginClient)
clientRouter.put('/edit-client/:id', editClient)
clientRouter.delete('/delete-client', deleteClient)