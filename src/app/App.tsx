import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Main } from '../modules/main'
import { Catalog } from '../modules/catalog/Catalog'
import { AboutUs } from '../modules/aboutUs'
import { CatalogPage } from '../modules/catalog/CatalogPage'
import { CatalogList } from '../modules/catalog/CatalogList'
import { Promotions } from '../modules/promotions/Promotions'
import { Contacts } from '../modules/contacts'

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    {/* <Route path="/promotions/" element={<Promotions />}/> */}
                    <Route path="/aboutUs" element={<AboutUs />}/>
                    <Route path="/:catalogId/*" element={<CatalogList/>}/>
                    <Route path="/:catalogId/:productId" element={<CatalogPage />} />
                    {/* <Route path="/contacts" element={<Contacts />}/> */}
            </Route>
        </Routes>
    </>
}