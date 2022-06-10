import React, { useState, useEffect } from "react";
import {PlaySection} from "./Jugar"

export function QuestionData() {
  const obtenerDatos =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
  const [datos, setDatos] = useState();
  const data = async () => {
    const dataInfo = await fetch(obtenerDatos);
    console.log(dataInfo);
    const rJson = await dataInfo.json();
    setDatos(rJson.results);
    console.log(rJson);
    console.log(datos)
    console.log(data)
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {/* <div>
        <ul>
          {!datos
            ? "Cargando..."
            : datos.results?.map((item, i) => (
                <li key={i}>{item.category} </li>
              ))}
          {!datos
            ? "Cargando..."
            : datos.results?.map((item, i) => (
                <li key={i}>{item.question.replace("&#039;", "'")}</li>
              ))}
          {!datos
            ? "Cargando..."
            : datos.results?.map((item, i) => (
                <li key={i}>{item.correct_answer}</li>
              ))}
        </ul>
      </div> */}
      {/* <PlaySection {...datos.results}></PlaySection> */}
      <PlaySection {...datos}/>

    </>
  );
}
