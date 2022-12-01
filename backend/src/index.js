import express from 'express'
import cors from 'cors'
import { getConnection } from './database/database.js'
import { adminRouter } from './routes/admins.js'

const app = express()
//listen
app.listen(8080, ()=> console.log('SERVER RUNNING'))
//middlewares
app.use(express.json())
app.use(cors())
//routes
app.get('/', (req, res)=> res.json('SERVER RUNNING'))
//database connect
getConnection()
//routes
app.use('/', adminRouter)