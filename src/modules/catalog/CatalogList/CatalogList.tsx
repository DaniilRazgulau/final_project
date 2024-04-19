import { useEffect } from 'react'
import store from './stores/CatalogListStore'
import { observer } from 'mobx-react-lite'
import { Button, Spin } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom'
import cartStore from '../../../common/stores/CartStore';
import './CatalogList.css'
import { Product } from '../../../common/models/Product';

export const CatalogList = observer(() => {
    const {productsData, awaiting, loadingData } = store
    const {addToCart} = cartStore
    const {catalogId} = useParams()


    useEffect(()=>{
        if(catalogId){
            loadingData(catalogId)
        }    
    },[catalogId])

    const handleProductCartClick = (product: Product) => {
        addToCart(product);
    }

    return <>
        <Spin spinning={awaiting}>
                <div className='products'>
                    {productsData && productsData.map((product) => 
                        <div key={product.id} className='product'>
                            <img className='product__image' src={product.images[0]} />
                            <div className='product_short_info'>
                                <div className='product_title'><Link to={product.id.toString()}>{product.title}</Link></div>
                                <div className='product_price'>{product.price}$</div>
                                <Button onClick={()=>{handleProductCartClick(product)}} className='product_add_btn' shape="circle" icon={<ShoppingCartOutlined />} />
                            </div>
                        </div>
                    )}
                </div>
        </Spin>
        </>
})