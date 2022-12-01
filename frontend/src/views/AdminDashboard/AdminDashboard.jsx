import { Navigate } from "react-router-dom"
import { ClientList, AddClient } from "./adminComponents/"

export const AdminDashboard = ()=>{
    const admin = JSON.parse(localStorage.getItem('admin'))
    return (
       !admin  
       ? <Navigate to='/' />
       :
       <>
        <ClientList />
        <AddClient />
       </>
    )
}