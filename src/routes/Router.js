import { Component } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CadastroPg from "../pages/CadastroPg";
import LoginPg from "../pages/LoginPg";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Navigate to='/login'/>}/>
                    <Route path= '/login' index element={<LoginPg/>} />
                    <Route path='/cadastro' element={<CadastroPg/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}