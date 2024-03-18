import { Badge, Button, ConfigProvider } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import cartStore from "../../../../common/stores/CartStore";
import { observer } from "mobx-react-lite";

export const Bucket = observer(() => {
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