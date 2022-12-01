import axios from 'axios'

export const adminLogin = async({data})=>{
    try {
        const response = await axios.post(`http://localhost:8080/admin-login`, data)
        if(response.data[0]){
            localStorage.setItem('admin', JSON.stringify(data))
        }
        return response
    } catch (error) {
        return error
    }
}