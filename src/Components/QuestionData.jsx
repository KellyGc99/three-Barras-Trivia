import React from "react";
//import { useEffect } from "react";
import { useState } from "react";
import Jugar from "../Styles/Jugar.module.css";

export function QuestionData(datos) {

  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const [score, setscore] = useState(-1);
  const [isFinalized, setFinalized] = useState(false);
  const [respuestas, setRespuestas] = useState([]);

  function decode(str)
{
    let map =
    {
        '&amp;': '&',
        '&aring;': 'Å',
        '&ldquo;': '""',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'"
    };
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&aring;|&ldquo;/g, function(m) {return map[m];});
}

  function handleAnswerSubmit(isCorrect, e) {

    const pregunta = datos?.datos?.map(
      (question, index) => index === CurrentQuestion && decode(question.question)
    );

    const results = datos?.datos?.map(
      (correct_answer, index) =>
        index === CurrentQuestion && correct_answer.correct_answer
    );

    const guardar = {
      pregunta: pregunta,
      respuesta: isCorrect,
      resultados: results,
      puntaje: score,
    };

    setRespuestas([...respuestas, guardar]);

    if (isCorrect === results[CurrentQuestion]) setscore(score + 1);

    setTimeout(() => {
      if (CurrentQuestion === datos?.datos?.length - 1) {
        setFinalized(true);
      } else {
        setCurrentQuestion(CurrentQuestion + 1);
      }
    }, 500);
  }

  if (isFinalized) {
    return (
      <>
      <section className={Jugar.GameContenedor}>
          <div className={Jugar.JuegoContenedorFinal}>
            <h2 className={Jugar.TitleFinal}>Your results</h2>
            {respuestas.map((dato, index) => (
              <div key={index}>
                  <div className={Jugar.Question}>
                  <div>
                  <b>Question {index+1}
                     </b>
                  <br></br>
                    {dato?.pregunta[index]}
                    </div>
                  <div className={Jugar.Res}>
                    <span>Correct answer </span>
                    {dato?.respuesta}
                    </div>
                  <div>
                    <span>Your answer </span>
                      {dato?.resultados[index]}
                  </div>
                </div>
              </div>
            ))}
            <div className={Jugar.Puntaje}>{<div><b>Score:</b> {score}</div>}</div>
            <button className={Jugar.ReloadJuego}
              onClick={() => {
                if (CurrentQuestion === datos?.datos?.length - 1) {
                  window.location.href = "/Inicio";
                } else {
                  setCurrentQuestion(CurrentQuestion + 1);
                }
              }}
            > play again
            </button>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
      <section className={Jugar.GameContenedor}>
          <div className={Jugar.JuegoContenedor}>
            <div className={Jugar.LadoIzquierdo}>
              <div className={Jugar.NumeroPregunta}>
                <span>
                  {" "}
                  pregunta {CurrentQuestion + 1} de {datos?.datos?.length}{" "}
                </span>
              </div>
              <div className={Jugar.TituloCategoria}>
                {datos?.datos?.map(
                  (category, index) =>
                    index === CurrentQuestion && (
                      <div key={index}><b>Category:</b> {category.category}</div>
                    )
                )}
              </div>
              <div className={Jugar.TituloPregunta}>
                {datos?.datos?.map(
                  (question, index) =>
                    index === CurrentQuestion && (
                      <div key={index}>{decode(question.question)}</div>
                    )
                )}
              </div>
            </div>
            <div className={Jugar.LadoDerecho}>
              <button
                className={Jugar.ButtonTrue}
                onClick={(e) => handleAnswerSubmit("True", e)}
              >
                True
              </button>
              <button
                className={Jugar.ButtonFalse}
                onClick={(e) => handleAnswerSubmit("False", e)}
              >
                False
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
