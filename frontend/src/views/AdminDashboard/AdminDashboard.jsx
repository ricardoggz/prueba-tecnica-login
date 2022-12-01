import { Navigate } from "react-router-dom"
import { ClientList } from "./ClientList"
import { AddClient } from "./AddClient"
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