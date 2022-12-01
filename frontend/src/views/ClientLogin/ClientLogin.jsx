import { useState } from 'react'
import { Form } from '../../components'

export const ClientLogin = ()=>{
    const [client, setClient]= useState('')
    const onChange = (evt)=>{
        setClient({
            ...client,
            [evt.target.name] : evt.target.value
        })
    }
    const onSubmit= (evt)=>{
        evt.preventDefault()
        console.log(client)
        evt.target.reset()
    }
    return (
        <section className='container-fluid pt-5 pb-5 bg-light'>
            <div className='container pt-5 pb-5'>
                <h2 className='text-center pb-5'>Iniciar Sesión como Cliente</h2>
                <Form
                    nameUser={'CLIENTE_USUARIO'}
                    namePassword={'CLIENTE_CONTRASENA'}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </div>
        </section>
    )
}