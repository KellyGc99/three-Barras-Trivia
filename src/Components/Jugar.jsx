import React, { useState, useEffect } from "react";
import {QuestionData} from "./QuestionData"

export  function PlaySection() {

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
  <QuestionData datos={datos}/>
    );
}

