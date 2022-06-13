import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StartGame } from "./Components/Inicio";
import { PlaySection } from "./Components/Jugar";

export function App (){
    return (
        <Routes>
            <Route exact path= '/Inicio' element={<StartGame/>}/>
            <Route path="/" element={<Navigate replace to="/Inicio" />} />
            <Route path= '*' element = {<Navigate replace to = '/'/>} />
            <Route path='/Inicio' element={<StartGame/>} />
            <Route path='/Jugar' element={<PlaySection/>} /> 
        </Routes>
        )
}