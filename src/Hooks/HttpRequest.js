import React, {useState, useEffect} from "react";
import axios from "axios";

export default function useAxiosGet(url){
    const [ response, setProducts] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(() => {
        setProducts({
            loading:true,
            data: null,
            error: false,
        })

        axios.get(url)
            .then(response =>{
                setProducts({
                    loading:false,
                    data : response.data,
                    error: false,
                })
            })
            .catch(() =>{
                setProducts({
                    loading:false,
                    data : null,
                    error: true,
                })
            })
    },[url])

    return response
}