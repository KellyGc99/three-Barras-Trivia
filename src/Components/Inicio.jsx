import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Inicio from "../Styles/Inicio.module.css";

export function StartGame() {
  const [usuario, setUsuario] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value
    setUsuario(text);
    console.log(usuario)
  };


  const saveData = () =>{
    localStorage.setItem("nombre",usuario);
  }

  return (
    <>
      <div className={Inicio.wrapperInicio}>
        <div className={Inicio.typingDemo}>
          <h1>Welcome to the Trivia Challenge</h1>
          <h3>Answer 10 fun true or false questions and collect points.</h3>
          <h3>Can you score 100%</h3>
        </div>

        <form className={Inicio.form} onSubmit={saveData}>
          <div className={Inicio.formData}>
            <input
              type="text"
              placeholder="Name"
              className={Inicio.inputName}
              name="nombre"
              onChange={handleInputChange}
            ></input>
          </div>
          <button className={Inicio.IniciarJuego} onClick={saveData}>
            <Link to="/Jugar" style={{ textDecoration: "none" }}>
              Start
            </Link>
          </button>
        </form>
      </div>
    </>
  );
}
