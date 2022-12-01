import { useOnChange } from '../../../hooks'
import { addClient } from '../../../../services'
import { formValues } from './consts'

export const AddClient = ()=>{
    const {onChange, user}= useOnChange()
    const onSubmit = (evt)=>{
        evt.preventDefault()
        addClient({data: user})
        evt.target.reset()
        return setTimeout(()=> document.location.reload(),500)
    }
    return (
        <div className="container pt-5 pb-5">
            <h3 className="text-center pb-5">Agregar cliente</h3>
            <form className="border p-3 bg-body" onSubmit={onSubmit}>
                {formValues.map((value, index)=>(
                        <div className="mb-3" key={index}>
                            <label className="form-label">{value.title}</label>
                            <input
                            type={value.inputType}
                            className="form-control"
                            name={value.name}
                            onChange={onChange}
                            required
                            autoComplete='off'
                            />
                        </div>
                    ))}
            <button type="submit" className="btn btn-success">Agregar</button>
        </form>
        </div>
    )
}