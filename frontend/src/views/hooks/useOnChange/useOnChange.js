import { useState } from 'react'

export const useOnChange = ()=>{
    const [user, setUser] = useState({})
    const onChange = (evt)=>{
        const{name, value } = evt.target
        setUser({
            ...user,
            [name] : value
        })
    }

    return { onChange, user }
}