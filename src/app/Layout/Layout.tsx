import { NavLink, Outlet, Link } from "react-router-dom"
import { Container } from "./components/Container"
import { observer } from "mobx-react-lite"
import './Layout.css'
import logo from '../../common/logo.png'

export const Layout = observer(() => {
  return (
      <>
      
          <header className='header'>
              <Container>
                  <Link to="/" className='header__logo'>
                    <img className="logo__img" alt="logo" src={logo}/>
                  </Link>
                  <nav className='nav'>
                      <ul className="nav__items">
                          <li className="nav__item"><NavLink to="/">Главная</NavLink></li>
                          <li className="nav__item"><NavLink to="/aboutUs">О нас</NavLink></li>
                          <li className="nav__item"><NavLink to="/tours">Туры</NavLink></li>
                          <li className="nav__item"><NavLink to="/toursInBel">Туры по Беларуси</NavLink></li>
                      </ul>
                      <hr />
                  </nav>
              </Container>
          </header>
          <main className="main">
              <Container>
                  <Outlet />
              </Container>                
          </main>
          <footer className="footer"> 
              <Container>Footer</Container>
          </footer>
      </>
  )
})

