import React, { useState, useEffect } from "react";
import {QuestionData} from "./QuestionData"

export  function PlaySection() {

  const obtenerDatos =    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
  const [datos, setDatos] = useState();
  
  const data = async () => {
      const dataInfo = await fetch(obtenerDatos);
      //console.log(dataInfo);
      const rJson = await dataInfo.json();
      setDatos(rJson.results);

      //console.log(rJson.results);
      //console.log(datos)
    };
    // const newItems = [...datos]

  useEffect(() => {
    data();
    console.log(data)
  }, []);
console.log(datos)
  // useEffect(()=>{
  //   if (datos) {
  //   }
  //   console.log(datos)
  //     },[datos] )


return (
  <QuestionData datos={datos}/>
    //  <> 
    //     <div>
    //        <ul>
    //         {!datos
    //            ? "Cargando..."
    //            : datos.map((item, i) => (
    //                <li key={i}>{item.category} </li>
    //              ))}
    //          {!datos
    //            ? "Cargando..."
    //            : datos.map((item, i) => (
    //               <li key={i}>{item.question.replace("&#039;", "'")}</li>
    //              ))}
    //          {!datos
    //            ? "Cargando..."
    //            : datos.map((item, i) => (
    //                <li key={i}>{item.correct_answer}</li>
    //              ))}
    //        </ul>
    //      </div>
    //      <h2>Funciono</h2> 
    //   </>
    );
}

