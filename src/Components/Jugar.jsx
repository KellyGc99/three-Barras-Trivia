import React, { useState, useEffect } from "react";
import {QuestionData} from "./QuestionData"
import Jugar from "../Styles/Jugar.module.css";

export  function PlaySection() {

  const [nombre, setNombre] = useState("")
  const getData =  () =>{
    return localStorage.getItem("nombre")
  }

  useEffect(() =>{
    setNombre(getData())
  },[]
  )

  const obtenerDatos =    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
  const [datos, setDatos] = useState();
  
  const data = async () => {
      const dataInfo = await fetch(obtenerDatos);
      const rJson = await dataInfo.json();
      setDatos(rJson.results);
    };

  useEffect(() => {
    data();
    console.log(data)
  }, []);
console.log(datos)


return (
  <>
  <p className={Jugar.UserName}>Hello {nombre} !!!</p>
  <QuestionData datos={datos}/>
  </>
 
    );
}

