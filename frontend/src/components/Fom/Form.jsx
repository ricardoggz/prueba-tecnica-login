export const Form = (props)=>{
    return (
        <form className="border p-3 bg-body" onSubmit={props.onSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input
                type="text"
                className="form-control"
                name={props.nameUser}
                onChange={props.onChange}
                required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                type="password"
                className="form-control"
                name={props.namePassword}
                onChange={props.onChange}
                required
                />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
    )
}