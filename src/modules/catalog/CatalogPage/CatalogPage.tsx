import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CatalogPageStore } from "./stores/CatalogPageStore";
import { Button, Image, Rate } from 'antd';
import { observer } from "mobx-react-lite";
import "./CatalogPage.css"
import { DescriptionItem } from "./components/DescriptionItem";
import cartStore from "../../../common/stores/CartStore";
import { Product } from "../../../common/models/Product";


export const CatalogPage = observer(() => {
    const [store] = useState(() => new CatalogPageStore())
    const {loadProduct, productDataState} = store
    const { productId } = useParams();
    const { addToCart } = cartStore

    useEffect(()=>{
        if(productId){
            loadProduct(productId)
        }
    },[productId])

    const handleProductCartClick = (product: Product) => {
        addToCart(product)
    }

    return <>
        {productDataState && <div>
                    <h1>{productDataState.title}</h1>
                    <div className="product_card">
                        <div className="products_img">
                            <Image.PreviewGroup >
                                {productDataState.image.map((img)=> <Image className="product_img" key={img} src={img} />)}
                            </Image.PreviewGroup>
                            
                        </div>
                        <div className="product_description">
                            <h2 className="product_description_title">Информормация о товаре</h2>
                            <DescriptionItem name="Описание" value={productDataState.description}/>
                            <DescriptionItem name="Категория товара" value={productDataState.category}/>
                            <DescriptionItem name="Рейтинг" value={<Rate disabled defaultValue={productDataState.rating} />}/>
                            <div className="product_description_price">{productDataState.price} $</div>
                            <div className="buttons_block">
                                <Button>Назад</Button>
                                <Button onClick={() => handleProductCartClick(productDataState)} type="primary">Добавить в корзину</Button>
                            </div>
                        </div>
                    </div>
            </div>}
    </>
})