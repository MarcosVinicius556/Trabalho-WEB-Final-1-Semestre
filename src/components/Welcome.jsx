import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import React from 'react';
import img from "../img/quiz.svg";

import './Welcome.css';

const Welcome = () => {
/**
 * quizState pega os valores e o dispatch altera os valores
 */
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para iniciar: </p>
        <img src={img} alt="Início do Quiz" />
        <button onClick={() => dispatch({acao: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  )
}

export default Welcome