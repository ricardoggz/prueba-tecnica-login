import axios from 'axios'

export const addClient = async({data})=>{
    try {
        const response = await axios.post(`http://localhost:8080/add-client`, data)
        return response
    } catch (error) {
        return error
    }
}