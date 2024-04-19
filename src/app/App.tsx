import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Main } from '../modules/main'
import { AboutSite } from '../modules/aboutSite'
import { CatalogPage } from '../modules/catalog/CatalogPage'
import { CatalogList } from '../modules/catalog/CatalogList'
import { Cart } from '../modules/cart'
import { Checkout } from '../modules/checkout'

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/aboutSite" element={<AboutSite />}/>
                    <Route path="/:catalogId/*" element={<CatalogList/>}/>
                    <Route path="/:catalogId/:productId" element={<CatalogPage />} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout/*" element={<Checkout/>}/>
            </Route>
        </Routes>
    </>
}