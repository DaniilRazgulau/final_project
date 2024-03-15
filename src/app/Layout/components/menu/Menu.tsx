import { NavLink } from "react-router-dom";
import './Menu.css';
import { CategoriesData } from "../../../../common/components/CategoriesData";

export const Menu = () => {
    
    return <div className="menu__items">
                <NavLink className='menu__item' to="/">Главная</NavLink>
                <CategoriesData/>
            </div>
}