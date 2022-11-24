import { useRef } from "react"


export const Cards = ({ year , url , country}) =>{


    const xd = useRef()
    
    

    return(
        <div className="cardGeneral">
            <h3 className="card__title">{`${country} --- ${year}`}</h3>
            <img  className="card__img animate__animated animate__flipInX" src={url} alt="CardAppear" />
        </div>
    )
}