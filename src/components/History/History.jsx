import { PartipionsWorldCup as appears } from "../Jsons/PartipionsWorldCup"
import { Cards } from "./Cards"
import './Cards.css'

export const History = () =>{



    return (
        <section className="container">
            <h1 className="titleGeneral animate__animated animate__fadeInDown">History Worlds Cup  Ecuador</h1>
            <div className="history">
                {
                    appears.map(a => <Cards key={a.id} year={a.year} url={a.url} country={a.country}/>)
                }
            </div>
        </section>
    )
}