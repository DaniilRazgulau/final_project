import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Main } from '../modules/main'
import { Tours } from '../modules/tours/Tours'
import { AboutUs } from '../modules/aboutUs'
import { ToursInBel } from '../modules/toursInBel/ToursInBel'

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/tours/*" element={<Tours />}/>
                    <Route path="/toursInBel/" element={<ToursInBel />}/>
                    <Route path="/aboutUs" element={<AboutUs />}/>
            </Route>
        </Routes>
    </>
}