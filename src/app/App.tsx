import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Main } from '../modules/main'
import { AboutUs } from '../modules/aboutUs'
import { CatalogPage } from '../modules/catalog/CatalogPage'
import { CatalogList } from '../modules/catalog/CatalogList'
import { Cart } from '../modules/cart'
import { Checkout } from '../modules/checkout'
import { Contacts } from '../modules/contacts'

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/aboutUs" element={<AboutUs />}/>
                    <Route path="/:catalogId/*" element={<CatalogList/>}/>
                    <Route path="/:catalogId/:productId" element={<CatalogPage />} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout/*" element={<Checkout/>}/>
                    <Route path="/contacts" element={<Contacts />}/>
            </Route>
        </Routes>
    </>
}