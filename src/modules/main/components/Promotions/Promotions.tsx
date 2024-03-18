import { Carousel } from "antd"
import { useNavigate } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
import './Promotions.css'

export const Promotions = () => {
    const navigate = useNavigate();
    
    const handleShoesClick = () => {
        navigate("/Shoes")
    }

    const handleMiscellaneousClick = () => {
        navigate("/Miscellaneous")
    }

    return <div className="promo__carousel">
                <Carousel autoplay pauseOnHover={true} autoplaySpeed={2500} className="promo__carousel__items">
                    <div className="promo__carousel__item">
                        <div className="promocode__shoes promo__item__info"  onClick={handleShoesClick}>
                            <div className="promocode__info">
                                <h2 className="promocode">По промокоду Spring</h2>
                                <span className="promocode_discount">Скидка на всю обувь 5%<RightOutlined /></span>
                            </div>
                        </div>
                    </div>
                    <div className="promo__carousel__item">
                        <div className="promocode__miscellaneous promo__item__info" onClick={handleMiscellaneousClick}>
                            <div className="promocode__info">
                                <h2 className="promocode">По промокоду Rabbit</h2>
                                <span className="promocode_discount">Скидка на весь ассортимент Другое 7%<RightOutlined /></span>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
}