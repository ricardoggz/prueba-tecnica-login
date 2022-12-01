import { useState, useEffect } from 'react'
import axios from 'axios'
export const ClientList = ()=>{
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        (async()=>{
            try {
                const response = await axios.get(`http://localhost:8080/clients`)
                setClients(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        })()
    },[loading])
    return (
        <section className='container-fluid pb-5 pt-5'>
            <h2 className='text-center'>Lista de clientes</h2>
            {
                !loading
                ?
                <table className="table border container mt-5">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Contraseña</th>
                    <th scope='col'>Editar campos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((client, index)=>(                            
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
                                    data-bs-target="#staticBackdrop"
                                    onClick={async()=>{
                                        try {
                                            const response = await axios.delete(`http://localhost:8080/delete-client`,{
                                                    data:{
                                                        CLIENTE_USUARIO: client.CLIENTE_USUARIO,
                                                        CLIENTE_CONTRASENA: client.CLIENTE_CONTRASENA
                                                    }
                                            })
                                            document.location.reload()
                                        } catch (error) {
                                            console.log(error)
                                        }                                    
                                    }}
                                    >
                                        Eliminar
                                    </button>
                                </td>                                
                            </tr>
                        
                        ))
                    }
                </tbody>
                </table>
                :
                <p>Cargando clientes...</p>
            }
        </section>
    )
}