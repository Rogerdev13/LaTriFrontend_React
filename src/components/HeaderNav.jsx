import {NavLink , Link} from 'react-router-dom'
import ecuimg from '../img/ec.png'

export const HeaderNav = () =>{
    return (
      <header>
        <div className="container">
          <div className='navbar__container'>
            <figure className="logo">
              <Link to="/"><img className="logo__img animate__animated animate__flipInY " src="https://i.ytimg.com/vi/mcPavrgneDc/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDRKq8NO2rlveID5o1XA7eoadGpMw" alt="Logo" /></Link>
            </figure>
            <nav className="nav">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active animate__animated animate__flipInY" : "nav__link animate__animated animate__flipInY"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active animate__animated animate__fadeInUp animate__delay-1s" : "nav__link animate__animated animate__fadeInUp animate__delay-2s"
                  }
                  to="/group"
                >
                  Group
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active animate__animated animate__fadeInUp animate__delay-2s" : "nav__link animate__animated animate__fadeInUp animate__delay-2s"
                  }
                  to="/history"
                >
                  History
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </header>
    );
}