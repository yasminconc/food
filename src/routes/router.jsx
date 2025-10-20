import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
