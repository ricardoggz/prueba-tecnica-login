import { Navigate } from 'react-router-dom'
import { Form } from '../../components'
import { useOnChange } from '../hooks'
import { loginClient } from '../../services'

export const ClientLogin = ()=>{
    const {onChange, user} = useOnChange()
    const onSubmit= (evt)=>{
        evt.preventDefault()
        loginClient({data: user})
        evt.target.reset()
        return setTimeout(()=>document.location.reload(),500)
    }
    return (
        !localStorage.getItem('client')
        ?
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
        :
        <Navigate to='/client-dashboard' />
    )
}