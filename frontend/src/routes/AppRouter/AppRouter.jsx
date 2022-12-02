import { Routes, Route } from 'react-router-dom'
import { AdminLogin, ClientLogin, AdminDashboard, ClientDashboard } from '../../views'
export const AppRouter = ()=>{
    return (
        <Routes>
            <Route path='/' element={<AdminLogin />} />
            <Route path='/client-login' element={<ClientLogin />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/client-dashboard' element={<ClientDashboard />} />
        </Routes>
    )
}