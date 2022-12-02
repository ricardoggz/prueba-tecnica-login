import { useFetch } from '../../../hooks'
import { Spinner, Modal } from '../../../../components'
import { deleteClient } from '../../../../services'

export const ClientList = ()=>{
    const {data, loading} = useFetch({
        url: `http://localhost:8080/clients`
    })
    return (
        <section className='container-fluid pb-5 pt-5'>
            <h2 className='text-center'>Lista de clientes</h2>
            {!loading
                ?
                <table className="table border container mt-5">
                <thead className='table-info'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Contraseña</th>
                    <th scope='col'>Editar cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((client, index)=>(                            
                            <tr key={index}>
                                <th scope="row">{client.CLIENTE_ID}</th>
                                <td>{client.CLIENTE_NOMBRE}</td>
                                <td>{client.CLIENTE_USUARIO}</td>
                                <td>{client.CLIENTE_CONTRASENA}</td>
                                <td>
                                    <button className='btn btn-primary'data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar campos</button>        
                                    <button
                                    className='btn btn-danger'
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteClient"        
                                    >
                                        Eliminar
                                    </button>
                                    <Modal
                                        onClick={()=>{deleteClient({
                                            user: client.CLIENTE_USUARIO,
                                            password: client.CLIENTE_CONTRASENA
                                            })
                                            setTimeout(()=> document.location.reload(), 500)}
                                        }
                                        title='¿Seguro que quieres eliminar este registro?'
                                        id='deleteClient'
                                    />
                                </td>                                
                            </tr>
                        
                        ))
                    }
                </tbody>
                </table>
                :
                <Spinner />
            }
        </section>
    )
}