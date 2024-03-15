import { Badge, Button, ConfigProvider } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { SearchOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    LoginOutlined
} from '@ant-design/icons';
import './HeaderBtns.css'
import { SearchProduct } from "../../../../common/components/SearchProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartStore from "../../../../common/stores/CartStore";
import { observer } from "mobx-react-lite";

export const HeaderBtns = observer(() => {
    const [isSearchActiv, setIsSearchActiv] = useState(false)
    const navigate = useNavigate()
    const {cartCounts} = cartStore

    const hendleCartClick = () => {
        navigate('/cart')
    }
    
    return <>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorLinkActive: '#728eae',
                                colorLinkHover: '#728eae',
                            },
                        },
                 }}
                >
                    <ButtonGroup className='header__btns'>
                        <div className='header__search'>
                            <Button className='header__btn' type="link" onClick={()=> setIsSearchActiv(true)} style={{marginTop: "4px"}}>
                                <SearchOutlined/>
                                Поиск</Button>
                            <SearchProduct activ={isSearchActiv} setActiv={setIsSearchActiv}/>
                        </div>
                         
                        <Button className='header__btn' type="link" style={{marginTop: "4px"}}>
                            <LoginOutlined />
                            Войти
                        </Button>
                        <Button className='header__btn' type="link" style={{marginTop: "4px"}}>
                            <HeartOutlined />
                            Избранное
                        </Button>
                        <Button className='header__btn header__btn__cart' type="link" onClick={hendleCartClick}>
                            <Badge className="btn__cart__badge" count={cartCounts} color='#fad89d'>
                                <ShoppingCartOutlined />
                                <span className="btn__cart__span">Корзина</span>
                            </Badge>
                        </Button>
                    </ButtonGroup>
                </ConfigProvider>                
            </>
})