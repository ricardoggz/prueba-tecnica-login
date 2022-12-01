import { Routes, Route } from 'react-router-dom'
import { AdminLogin, ClientLogin, AdminDashboard } from '../../views'
export const AppRouter = ()=>{
    return (
        <Routes>
            <Route path='/' element={<AdminLogin />} />
            <Route path='/client-login' element={<ClientLogin />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
        </Routes>
    )
}