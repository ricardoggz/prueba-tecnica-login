import { Navigate } from "react-router-dom"
import { useFetch } from "../hooks"
import { Spinner } from "../../components"
export const ClientDashboard = ()=>{
    const{data, loading} = useFetch({
        url:`http://localhost:8080/orders`
    })
    const client = JSON.parse(localStorage.getItem('client'))
    return (
        !client
        ?
        <Navigate to ='/client-login'/>
        :
        <section className="container pt-5">
            {
                !loading
                ?
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Número de pedido</th>
                    <th scope="col">Fecha de pedido</th>                                        
                    <th scope="col">Número de libro</th>
                    <th scope="col">Título de libro</th>
                    <th scope="col">Nombre de cliente</th>
                    <th scope="col">Nombre de usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.filter((value)=> value.CLIENTE_USUARIO === client.CLIENTE_USUARIO)
                        .map((value, index)=>(
                            <tr key={index}>
                                <th scope="row">{value.PEDIDO_ID}</th>
                                <td>{value.PEDIDO_FECHA}</td>                                                               
                                <td>{value.LIBRO_ID}</td>
                                <td>{value.LIBRO_NOMBRE}</td>                                
                                <td>{value.CLIENTE_NOMBRE}</td>
                                <td>{value.CLIENTE_USUARIO}</td>                
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