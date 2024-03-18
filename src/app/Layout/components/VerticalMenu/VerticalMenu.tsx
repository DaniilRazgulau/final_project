import { Button, Drawer } from "antd"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import burger_icon from '../../../../common/components/images/burger_icon.png'
import './VerticalMenu.css';
import { CategoriesData } from "../../../../common/components/CategoriesData";

export const VerticalMenu = () => {
    const [open, setOpen] = useState(false);
    
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return  <>
                <div className='vertical__menu'>
                    <Button type="primary" onClick={showDrawer}>
                        <img className="burger_icon" alt="боковое меню" src={burger_icon} style={{ width: '25px'}}/>
                        <span>Каталог</span> 
                    </Button>
                </div>
                <Drawer 
                    onClose={onClose} 
                    open={open} 
                    placement={'left'}
                >
                    <div  className="drawer__items" onClick={onClose}> 
                        <NavLink className='menu__item' to="/">Главная</NavLink>
                        <CategoriesData/>
                    </div>
                </Drawer>
    </>
}