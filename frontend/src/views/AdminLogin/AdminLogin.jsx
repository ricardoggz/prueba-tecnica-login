import { Navigate } from 'react-router-dom'
import { Form } from '../../components'
import { useOnChange } from '../hooks'
import { adminLogin } from '../../services'

export const AdminLogin = ()=>{
    const {onChange, user} = useOnChange()
    
    const onSubmit= (evt)=>{
        evt.preventDefault()
        adminLogin({data: user})
        evt.target.reset()
        return setTimeout(()=>document.location.reload(),500)
    }
    return (
        !localStorage.getItem('admin')
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