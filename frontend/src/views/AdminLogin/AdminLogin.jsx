import { useState } from 'react'
import { Form } from '../../components'

export const AdminLogin = ()=>{
    const [admin, setAdmin]= useState('')
    const onChange = (evt)=>{
        setAdmin({
            ...admin,
            [evt.target.name] : evt.target.value
        })
    }
    const onSubmit= (evt)=>{
        evt.preventDefault()
        console.log(admin)
        evt.target.reset()
    }
    return (
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
    )
}