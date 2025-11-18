import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import LoginWithApps from "../pages/loginWithApps/loginWithApps"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login-with-apps" element={<LoginWithApps/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
