import EmptyCartIcon  from '../../../../common/components/images/ic_empty.svg';
import './CartBucketEmpty.css'


export const CartBucketEmpty = () => {
    return <div className='empty_cart'>
        <EmptyCartIcon />
        <h2>Корзина пуста</h2>
    </div>
}