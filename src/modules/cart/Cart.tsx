import { observer } from "mobx-react-lite"
import cartStore from "../../common/stores/CartStore"
import { CartProduct } from "./components/CartProduct";
import { CartBucketEmpty } from "./components/CartBucketEmpty";
import "./Cart.css"
import { useNavigate } from "react-router-dom";
import { Button, Modal, notification } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useEffect } from "react";

const { confirm } = Modal

export const Cart = observer(() => {
    const {cartState, totalPrice, cartCounts,  deleteProduct, clear, setLocalStorage} = cartStore
    const navigate = useNavigate()

    useEffect(() => {
        setLocalStorage(cartState)
    }, [cartState])

    const handleOrderButtonClick = () => {
        navigate("/checkout/order")
    }

    const handleDeleteAllProducts = () => {
        confirm({
            title: 'Вы действительно хотите удалить всё?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление ...',
            okText: 'Удалить',
            cancelText: 'Закрыть',
            onOk() {
                clear()
                notification.success({
                    message: "Удаление прошло успешно"
                })
            },
            onCancel() {},
        })
    }

    return <div className="cart__wrapper">
        {cartState.length > 0 ? <>{cartState.map((cartProduct) => 
            <CartProduct 
                key={cartProduct.id} 
                product={cartProduct}
                deleteProduct={deleteProduct}
            />
         )}
         <div className="total_cart">
            <div className="total">
                <div className="total_products">Товаров: {cartCounts} шт</div>
                <div className="total_price">Итого: {totalPrice}$</div>
            </div>    
            <div className="cart__btn">
                <Button className="delete_btn" onClick={handleDeleteAllProducts}>Удалить всё</Button>
                <Button className="checkout" onClick={handleOrderButtonClick}>Оформить заказ</Button>
            </div>
        </div>    
         </> : <CartBucketEmpty />}
    </div>
})