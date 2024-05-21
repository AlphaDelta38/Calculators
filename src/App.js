import React, {useEffect, useState} from "react";
import {Router, Route, BrowserRouter, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import FiktivniComponent from "./FiktivniComponent";
import fiktivniComponent from "./FiktivniComponent";
import Table from "./Table";
import MakKlaski from "./MakKlaski";





function App() {


    return (
        <BrowserRouter>
                <div className="Navigate">
                    <div className="Container__navigate">
                       <Link to={"/fiktivni"}><button className="btnTo" >Фиктивные перменные</button></Link>
                        <Link to={"/Table"}> <button className="btnTo" >Класс посту</button></Link>
                        <Link to={"/MakLaski"}> <button className="btnTo" >Мак-класкі</button></Link>
                    </div>
                </div>
            <Routes>
                <Route path="/fiktivni" element={<FiktivniComponent/>} />
                <Route path="/Table" element={<Table />} />
                <Route path="/MakLaski" element={<MakKlaski></MakKlaski>} />
            </Routes>
        </BrowserRouter>
    );




}

export default App;
