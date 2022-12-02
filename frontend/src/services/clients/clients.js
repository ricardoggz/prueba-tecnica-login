import axios from 'axios'

export const addClient = async({data})=>{
    try {
        const response = await axios.post(`http://localhost:8080/add-client`, data)
        return response
    } catch (error) {
        return error
    }
}

export const deleteClient = async({user, password})=>{
    try {
        const response = await axios.delete(`http://localhost:8080/delete-client`,{
            data:{
                CLIENTE_USUARIO: user,
                CLIENTE_CONTRASENA: password 
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const loginClient = async({data})=>{
    try {
        const response = await axios.post(`http://localhost:8080/client-login`, data)
        console.log(response.data[0])
        if(response.data[0]){
            localStorage.setItem('client', JSON.stringify(data))
        }
        return response
    } catch (error) {
        return error
    }
}