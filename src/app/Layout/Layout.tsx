import { Layout as AntdLayout } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from './components/menu';
import logo from '../../common/components/images/logo3.png';
import { Container } from './components/Container';
import './Layout.css'

import { Bucket } from './components/Bucket';
import { FooterContent } from './components/FooterContent';
import { VerticalMenu } from './components/VerticalMenu';

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
                    <VerticalMenu />
                  </div>

                  <Link to="/" className='header__logo'>
                    <img className="logo__img" alt="логотип" src={logo}/>
                    <div className='logo__title'>Moom</div>
                  </Link>
                  
                  <Bucket/>
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

            <Footer style={{ backgroundColor: '#FFD750' }}>
              <Container>
                <FooterContent/>
              </Container>
            </Footer>
          </AntdLayout>
          )
}