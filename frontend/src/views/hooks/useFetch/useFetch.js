import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = ({url})=>{
    const [data, setData]= useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        (async()=>{
            try {
                const response = await axios.get(url)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                return error
            }
        })()
    },[url])

    return {data, loading}
}