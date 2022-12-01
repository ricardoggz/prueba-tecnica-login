import axios from 'axios'
import { useState } from "react"
export const AddClient = ()=>{
    const [client, setClient] = useState({})
    const onChange = (evt)=> {
        setClient({
            ...client,
            [evt.target.name]: evt.target.value
        })
    }
    const onSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post(`http://localhost:8080/add-client`, client)
            setClient({})
            document.location.reload()
            return response
        } catch (error) {
            console.log(error)
        }
        evt.target.reset()
    }
    return (
        <div className="container pt-5 pb-5">
            <h3 className="text-center pb-5">Agregar cliente</h3>
            <form className="border p-3 bg-body" onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Número de cliente</label>
                <input
                type="number"
                className="form-control"
                name={'CLIENTE_ID'}
                onChange={onChange}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                type="text"
                className="form-control"
                name={'CLIENTE_NOMBRE'}
                onChange={onChange}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input
                type="text"
                className="form-control"
                name={'CLIENTE_USUARIO'}
                onChange={onChange}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                type="text"
                className="form-control"
                name={'CLIENTE_CONTRASENA'}
                onChange={onChange}
                required
                />
            </div>
            <button type="submit" className="btn btn-success">Agregar</button>
        </form>
        </div>
    )
}