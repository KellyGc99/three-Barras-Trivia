import React from "react";
import { useState } from "react";
//import { useState,useEffect } from "react";
import Jugar from "../Styles/Jugar.module.css";

export function QuestionData({ datos }) {
  console.log(datos);

  const [CurrentQuestion, setCurrentQuestion] = useState([0]);
  // const [score, setscore] = useState(0);
  // const [isFinalized, setFinalized] = useState (false);
  console.log (CurrentQuestion)

  return (
    <>
    <div className={Jugar.JuegoContenedor}>
      <div className={Jugar.LadoIzquierdo}>
        <div className={Jugar.NumeroPregunta}>
          <span>{CurrentQuestion + 1} de </span>{datos?.length}
        </div>
        <div className={Jugar.TituloPregunta}>{datos[CurrentQuestion].question}</div>
      </div>
      <div className={Jugar.LadoDerecho}>
        {datos[CurrentQuestion].map((correct_answer) =>(
          <button className={Jugar.ButtonTrue}>{correct_answer}</button>
        ))}
        
        <button className={Jugar.ButtonFalse}>False</button>
      </div>
      </div>
    </>
  );
}
