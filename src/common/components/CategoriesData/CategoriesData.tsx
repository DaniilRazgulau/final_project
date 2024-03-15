import { useEffect } from "react";
import store from "../../../modules/catalog/CatalogList/stores/CatalogListStore";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import './CategoriesData.css'

export const CategoriesData = observer(() => {
    const {categoriesState, loadingData, loadCategories} = store

    useEffect(()=>{
        loadCategories()
    },[])

    const hendleCategoryClick = (categoryId: string) => {
        loadingData(categoryId)
    }

    return (categoriesState && categoriesState.length >0 && categoriesState.map((category)=>{
        return <NavLink key={category.id} className='menu__item' to={`/${category.id}`} onClick={()=>{hendleCategoryClick(category.id)}}>{category.name}</NavLink>
    }))
})    