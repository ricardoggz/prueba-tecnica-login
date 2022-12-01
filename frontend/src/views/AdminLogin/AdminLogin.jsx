import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Form } from '../../components'

export const AdminLogin = ()=>{
    const [admin, setAdmin]= useState({})
    const storageAdmin = localStorage.getItem('admin')
    const onChange = (evt)=>{
        setAdmin({
            ...admin,
            [evt.target.name] : evt.target.value
        })
    }
    const onSubmit= async(evt)=>{
        evt.preventDefault()        
        try {
            const response = await axios.post(`http://localhost:8080/admin-login`, admin)
            if(response.data[0]){
                localStorage.setItem('admin', JSON.stringify(response.data[0]))
            }
            console.log(response.data[0])            
        } catch (error) {
            console.log(error)
        }
        evt.target.reset()
        document.location.reload()
    }
    return (
        !storageAdmin
        ?
        <section className='container-fluid pt-5 pb-5 bg-light'>
            <div className='container pt-5 pb-5'>
                <h2 className='text-center pb-5'>Iniciar Sesión como Administrador</h2>
                <Form
                    nameUser={'ADMIN_USUARIO'}
                    namePassword={'ADMIN_CONTRASENA'}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </div>
        </section>
        :
        <Navigate to ='/admin-dashboard' />
    )
}