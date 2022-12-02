import { Link } from 'react-router-dom'

export const NavBar = ()=>{
    const admin = JSON.parse(localStorage.getItem('admin'))
    const client = JSON.parse(localStorage.getItem('client'))
    return(
        !admin && !client
        ?
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light" to='/'>PRUEBA LOGIN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link text-light" to='/'>Administradores</Link>
                    <Link className="nav-link text-light" to='/client-login'>Clientes</Link>
                </div>
                </div>
            </div>
        </nav>
        :
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light" to='/admin-dashboard'>PRUEBA LOGIN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button
                    className='btn btn-light'
                    onClick={()=>{
                        localStorage.clear()
                        document.location.reload()
                    }}
                    >Cerrar sesión
                    </button>
                </div>
                </div>
            </div>
        </nav>
    )
}