import pkg from 'pg'
const{Pool}=pkg

export const pool = new Pool({
    user: 'postgres',
    host:'',
    password:'root_123',
    database: 'users',
    port:5432
})

export const getConnection = ()=> pool.connect((err)=>{
    if(err) return err
    console.log('DATABASE CONECTED')
})