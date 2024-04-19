import { ProductInCart } from "../../../../common/models/ProductInCart"
import { Modal, notification, Button } from "antd"
import { ExclamationCircleFilled } from '@ant-design/icons';
import './CartProduct.css'


type CartProductProps = {
    product: ProductInCart
    deleteProduct: (productId:number) => void
}

const { confirm } = Modal;



export const CartProduct = ({product, deleteProduct}:CartProductProps) => {
    const handleDelete = (id: number) => {
        confirm({
            title: 'Вы действительно хотите удалить товар?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление .....',
            okText: "Удалить",
            onOk() {
                deleteProduct(id)
                notification.success({
                    message: "Удаление прошло успешно"
                })
            },
            onCancel() {
            },
        });  
    }

    return <div className="cart__item">
                <div className="cart__item__img">
                    <img className="cart__item__img__logo" src={product.images[0]} width={120}/>
                </div>
                <div className="cart__item__description">
                    <h3>{product.title}</h3>
                    <p  className="cart__item__sum">Сумма {product.price*product.count}$ за {product.count}/шт. </p>
                </div>
                <Button className="cart__item__btn" onClick={()=> handleDelete(product.id)}>Удалить</Button>
            </div>
}