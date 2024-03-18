import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { CatalogPageStore } from "./stores/CatalogPageStore";
import { Image } from 'antd';
import { observer } from "mobx-react-lite";
import "./CatalogPage.css"
import { DescriptionItem } from "./components/DescriptionItem";
import cartStore from "../../../common/stores/CartStore";
import { Product } from "../../../common/models/Product";


export const CatalogPage = observer(() => {
    const [store] = useState(() => new CatalogPageStore())
    const { loadProduct, productDataState } = store
    const { productId } = useParams();
    const { addToCart } = cartStore

    const navigate = useNavigate()

    useEffect(()=>{
        if(productId){
            loadProduct(productId)
        }
    },[productId])

    const handleProductCartClick = (product: Product) => {
        addToCart(product)
    }

    const handleGoToMainClick = () => {
        navigate('/:catalogId/')
    }

    return <>
        {productDataState && <div>
                    <h1>{productDataState.title}</h1>
                    <div className="product_card">
                        <div className="product_description">
                            <div className="product_img_table">
                                <img className="product__img" src={productDataState.images[0]} />
                                <div className="product__table">
                                    <div className="product__category">
                                        <DescriptionItem name="Описание" value={productDataState.description}/>
                                        <DescriptionItem name="Категория товара" value={productDataState.category.name}/>
                                    </div> 
                                    <div className="product_description_price">{productDataState.price} $</div>   
                                    <div className="buttons_block">
                                        <button className="product_btn_back" onClick={handleGoToMainClick}>Назад</button>
                                        <button className="product_btn_add" onClick={() => handleProductCartClick(productDataState)}>Добавить в корзину</button>
                                    </div>
                                </div>
                            </div>        
                            <div className="products_img"> 
                            <Image.PreviewGroup>
                                {productDataState.images.map((img)=> <Image className="product_img" key={img} src={img} />)}
                            </Image.PreviewGroup>    
                            </div>
                        </div>
                    </div>
            </div>}
    </>
})