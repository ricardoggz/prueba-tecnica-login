import { Router } from 'express'
import { getAdmins, addAdmin, editAdmin, deleteAdmin, loginAdmin } from '../controllers/admins.js'
export const adminRouter = Router()
adminRouter.get('/admins', getAdmins)
adminRouter.post('/add-admin', addAdmin)
adminRouter.post('/admin-login', loginAdmin)
adminRouter.put('/edit-admin/:id', editAdmin)
adminRouter.delete('/delete-admin', deleteAdmin)