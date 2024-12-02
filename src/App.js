import React, {useEffect, useState} from "react";
import {Router, Route, BrowserRouter, Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import FiktivniComponent from "./FiktivniComponent";
import fiktivniComponent from "./FiktivniComponent";
import Table from "./Table";
import MakKlaski from "./MakKlaski";
import MachineOfTuring from "./MachineOfTuring";
import BackPack from "./BackPack";





function App() {


    return (
        <BrowserRouter>
                <div className="Navigate">
                    <div className="Container__navigate">
                       <Link style={{marginLeft: "10px"}} to={"/fiktivni"}><button className="btnTo" >Фиктивные перменные</button></Link>
                        <Link style={{marginLeft: "10px"}} to={"/Table"}> <button className="btnTo" >Класс посту</button></Link>
                        <Link style={{marginLeft: "10px"}} to={"/MakLaski"}> <button className="btnTo" >Мак-класкі</button></Link>
                        <Link style={{marginLeft: "10px"}} to={"/machine"}> <button className="btnTo" >Машина тюринга</button></Link>
                        <Link style={{marginLeft: "10px"}} to={"/backpack"}> <button className="btnTo" >Рюкзак</button></Link>
                    </div>
                </div>
            <Routes>
                <Route path="/fiktivni" element={<FiktivniComponent/>} />
                <Route path="/Table" element={<Table />} />
                <Route path="/MakLaski" element={<MakKlaski></MakKlaski>} />
                <Route path="/machine" element={<MachineOfTuring></MachineOfTuring>} />
                <Route path="/backpack" element={<BackPack></BackPack>} />
            </Routes>
        </BrowserRouter>
    );




}

export default App;
