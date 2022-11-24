import { useState   } from 'react';
import { isRouteErrorResponse } from 'react-router-dom';
import {ClubTeams} from './Jsons/ClubTeams'

import 'animate.css';


export const Group = () =>{

    const [urlImg , setUrlImg] = useState(ClubTeams[0].url)
    const [effect ,  setEffect] = useState('animate__animated animate__backInRight')
    const [imgActive , setImgActive] = useState(1)

  
    return (
      <div className="container">
        <h1 className='titleGeneral animate__animated animate__fadeInBottomRight'>Group <span className='title__diferent'>A</span> Fifa World Cup</h1>
        <div className="article">
          <nav className="navbar">
            {ClubTeams.map((club , index) => (
              <div  onClickCapture={() => setImgActive(club.id)}  onClick={() => setUrlImg(club.url)} className={`navbar__group animate__animated  animate__backInLeft  ${imgActive -1   == index  ? 'active' : ''}`}  key={club.id}>
                <li 
        
                  className="navbar__item"
                >
                  {club.name}
                </li>
              </div>
            ))}
          </nav>
          <section className="homeimg">
            <figure className="homeimg__thumb">
              <img className={`homeimg__img animate__animated animate__backInLeft ${effect}`} src={urlImg} alt="Home Footage" />
            </figure>
          </section>
        </div>
      </div>
    );
}