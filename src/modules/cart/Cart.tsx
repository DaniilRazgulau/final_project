import { observer } from "mobx-react-lite"
import cartStore from "../../common/stores/CartStore"
import { CartProduct } from "./components/CartProduct";
import { CartBucketEmpty } from "./components/CartBucketEmpty";
import "./Cart.css"
import { useNavigate } from "react-router-dom";

export const Cart = observer(() => {
    const {cartState, totalPrice, deleteProduct} = cartStore
    const navigate = useNavigate()

    const handleOrderButtonClick = () => {
        navigate("/checkout/order")
    }

    return <div className="cart__wrapper">
        {cartState.length > 0 ? <>{cartState.map((cartProduct) => 
            <CartProduct 
                key={cartProduct.id} 
                product={cartProduct}
                deleteProduct={deleteProduct}
            />
         )}
         <div className="total_price">Итого: {totalPrice}$</div>
         <div className="cart__btn">
            <button className="checkout" onClick={handleOrderButtonClick}>Оформить заказ</button>
         </div>
         </> : <CartBucketEmpty />}
    </div>
})