import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import React from 'react';
import img from "../img/Teste-de-conhecimento.svg";

import './Welcome.css';

const Welcome = () => {
/**
 * quizState pega os valores e o dispatch altera os valores
 */
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Seja bem vindo amante da <span>tecnologia!</span></h2>
        <p>
          Aqui seu conhecimento sobre <span>{quizState.assunto}</span> será testado em {quizState.questions.length} perguntas dedsenvolvidas pelo <span>Professor(a) {quizState.professor}</span>
        </p>
        <img src={img} alt="Início do Quiz" />
        <button onClick={() => dispatch({acao: "MUDA_ESTADO"})}>Iniciar</button>
    </div>
  )
}

export default Welcome