import { CategoriesData } from "../../../../common/components/CategoriesData"
import './FooterContent.css'
import { MessagersInfo } from "../../../../common/components/MessagersInfo";

export const FooterContent = () => {
    return <div className="footer__wrapper">
                <div className="footer__catalog">
                    <h2 className="footer__title">Каталог</h2>
                    <ul className="footer__catalog__items">
                        <CategoriesData/>
                    </ul>
                </div>
                <div className="footer__social">
                    <div className="footer__messagers__info">
                        <h2  className="footer__title">Наши соцсети</h2>
                        <MessagersInfo/>
                    </div>
                </div>   
            </div>
}