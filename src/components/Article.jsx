import axios from "axios"
import { useEffect, useState } from "react"

export function Article() {
    const [dataApi, setDataApi] = useState([])
  
    useEffect(()=>{
        axios.get("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then(result => setDataApi(result.data))
        .catch(e => console.error(e))
    }, [])

    return(
        dataApi.map(item => {
            return(
                <article key={item.id}>
                    <h2>{item.titulo}</h2>

                    <img src={item.capa} alt={item.titulo} />

                    <p>{item.subtitulo}</p>

                    <button>LEIA MAIS</button>
                </article>
            )
        })     
    )   
} 