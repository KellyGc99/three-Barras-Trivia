import React from "react";
import Jugar from "../Styles/Jugar.module.css";
import { useState, useEffect } from "react";

export function PlaySection(props) {

  return <div>{props.category}</div>
  // <div>{props.category}</div>;
  
  // console.log(props[0]);
   // console.log(props[0]);
  
  
//   const [preguntaActual, setPreguntaActual] = useState(0);
//   const [puntuacion, setPuntuacion] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [tiempoRestante, setTiempoRestante] = useState(10);
//   const [disable, setDisable] = useState(false);
//   const [answer, setAnswer] = useState(false);
//   const c = props[preguntaActual];
  

//   function handleAnswerSubmit(isCorrect, e) {
//     if (isCorrect === props[preguntaActual].correct_answer) setPuntuacion(puntuacion + 1);
//     e.target.classlist.add((isCorrect === props[preguntaActual].correct_answer) ? "correct" : "incorrect");

//     setTimeout(() => {
//       if (preguntaActual === props.length - 1) {
//         setIsFinished(true);
//       } else {
//         setPreguntaActual(preguntaActual + 1);
//       }
//     }, 1500);
//   }

//   useEffect(() => {
//     const intervalo = setInterval(() => {
//       if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
//       if (tiempoRestante === 0) setDisable(true);
//     }, 1000);

//     return () => clearInterval(intervalo);
//   }, [tiempoRestante]);

// if (props !== undefined || props.length !== 0 ) {
//   if (isFinished)
//     return (
//       <div className={Jugar.JuegoTerminado}>
//         <span>
//           {" "}
//           obtuviste {puntuacion} de {props.length}{" "}
//         </span>
//         <button onClick={() => (window.location.href = "/")}>Play Again</button>
//         <button
//           onClick={() => {
//             setIsFinished(false);
//             setAnswer(true);
//             setPreguntaActual(0);
//           }}
//         >
//           View Answers
//         </button>
//       </div>
//     );

//   if (answer)
//     return (
//       <>
//         <div className={Jugar.LadoIzquierdo}>
//           <div className={Jugar.NumeroPregunta}>
//             <h1>pregunta {preguntaActual + 1} de </h1> {props.length}
//           </div>
//           <div className={Jugar.TituloPregunta}>
//             {props[preguntaActual].question}
//           </div>
//           <div>
//             {
//               props[preguntaActual].opciones.filter(
//                 (opcion) => opcion.isCorrect
//               )[0].textoRespuesta
//             }
//           </div>
//           <button
//             onClick={() => {
//               if (preguntaActual === props.length - 1) {
//                 window.location.href = "/";
//               } else {
//                 setPreguntaActual(preguntaActual + 1);
//               }
//             }}
//           >
//             {preguntaActual === props.length - 1 ? "Play Again" : "next"}
//           </button>
//         </div>
//         <div>Answers</div>
//       </>
//     );

//   return (
//     <>
//       <div className={Jugar.LadoIzquierdo}>
//         <div className={Jugar.NumeroPregunta}>
//           <h1 className={Jugar.Pregunta}>pregunta {preguntaActual + 1}</h1>{" "}
//           {props.length}
//         </div>
//         <div className={Jugar.TituloPregunta}>
//           <p>{props[preguntaActual].question}</p>
//         </div>
//         <div>
//           {!disable ? (
//             <span className={Jugar.TiempoRestante}>
//               {" "}
//               Time: {tiempoRestante}{" "}
//             </span>
//           ) : (
//             <button
//               onClick={() => {
//                 setTiempoRestante(10);
//                 setDisable(false);
//                 setPreguntaActual(preguntaActual + 1);
//               }}
//             >
//               Continue
//             </button>
//           )}
//         </div>
//       </div>
//       <div className={Jugar.LadoDerecho}>
//           <>
//             <button
//               disabled={disable}
//               key={"True"}
//               onClick={(e) => handleAnswerSubmit("True", e)}
//             >
//               True
//             </button>
//             <button
//               disabled={disable}
//               key={"False"}
//               onClick={(e) => handleAnswerSubmit("False", e)}
//             >
//               False
//             </button>
//           </>

//       </div>
//     </>
//   );
// }
  
}
