// import { NavLink, Outlet, Link } from "react-router-dom"
// import { Container } from "./components/Container"
// import { observer } from "mobx-react-lite"
// import './Layout.css'
// import logo2 from '../../common/components/images/logo2.jpg'
// import { CategoriesData } from "../../common/components/CategoriesData"

// export const Layout = observer(() => {
//   return (
//       <>
//           <header className='header'>
//               <Container>
//                   <Link to="/" className='header__logo'>
//                     <img className="logo__img" alt="logo" src={logo2}/>
//                   </Link>
//                   <nav className='nav'>
//                       <ul className="nav__items">
//                           <li className="nav__item"><NavLink to="/">Главная</NavLink></li>
//                           <li className="nav__item"><NavLink to="/aboutUs">О нас</NavLink></li>
//                           {/* <li className="nav__item"><NavLink to="/electronics">Электрика</NavLink></li>
//                           <li className="nav__item"><NavLink to="/jewelery">Ювелирные изделия</NavLink></li>
//                           <li className="nav__item"><NavLink to="/men's clothing">Мужская одежда</NavLink></li>
//                           <li className="nav__item"><NavLink to="/women's clothing">Женская одежда</NavLink></li> */}
//                           <CategoriesData />
//                           <li className="nav__item"><NavLink to="/promotions">Акции</NavLink></li>
//                           <li className="nav__item"><NavLink to="/contacts">Контакты</NavLink></li>
//                       </ul>
//                       <hr />
//                   </nav>
//               </Container>
//           </header>
//           <main className="main">
//               <Container>
//                   <Outlet />
//               </Container>                
//           </main>
//           <footer className="footer"> 
//               <Container>Footer</Container>
//           </footer>
//       </>
//   )
// })

import { Layout as AntdLayout } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from './components/menu';
// import logo from '../../common/images/logo2.jpg';
import { Container } from './components/Container';
import './Layout.css'
import { DrawerMenu } from './components/DrawerMenu';
import { DropdownMenu } from './components/DropdownMenu';
import { HeaderBtns } from './components/HeaderBtns';
import { FooterContent } from './components/FooterContent';

const { Header, Content, Footer } = AntdLayout;

export const Layout = () => {

  return (<AntdLayout style={{ backgroundColor: '#F0F8FF', height:'100vh'}}>
            <Header
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                width: '100%',
                backgroundColor: '#F0F8FF'
              }}
            >
              <Container >
                <div className="header__wrapper">
                  <div className='header__menu'>
                    <DrawerMenu/>
                    <DropdownMenu />
                  </div>

                  <Link to="/" className='header__logo'>
                    {/* <img className="logo__img" alt="логотип" src={logo}/> */}
                    <div className='logo__title'>RD</div>
                  </Link>
                  
                  <HeaderBtns/>
                </div>
              </Container>
            </Header>
            
            <Content className='content'style={{}}>
              <Container>
                <Menu />
                <div
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <Outlet />
                </div>
              </Container>
            </Content>

            <Footer style={{ backgroundColor: 'rgb(191, 212, 237)' }}>
              <Container>
                <FooterContent/>
              </Container>
            </Footer>
          </AntdLayout>
          )
}