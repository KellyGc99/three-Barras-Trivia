import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import Inicio from "../Styles/Inicio.module.css";

export function StartGame() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: " ",
  });

  const handleInputChange = (e) => {

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(usuario.nombre+ " "+ usuario.apellido)
  };

  return (
    <>
      <div className={Inicio.wrapperInicio}>
        <div className={Inicio.typingDemo}>
          <h1>Welcome to the Trivia Challenge</h1>
          <h2>Answer 10 fun true or false questions and collect points.</h2>
          <h3>Can you score 100%</h3>
        </div>
      </div>
      <form className={Inicio.form} onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="Name"
          className={Inicio.inputName}
          name="nombre"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Surname"
          className={Inicio.inputSurname}
          name="apellido"
          onChange={handleInputChange}
        ></input>
        <button className={Inicio.buttonBegin} type="submit" >Registes</button>
      </form>
      <button className={Inicio.IniciarJuego}>
          <Link to="/Jugar"
          style={{ textDecoration: "none"}}>
            Start
          </Link>
        </button>
    </>
  );
}