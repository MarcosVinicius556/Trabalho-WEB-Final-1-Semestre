import React from 'react'

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import goodFace from '../img/good_face.svg';
import sadFace from '../img/sad_face.svg';
import notBad from '../img/not_bad.svg';

import './EstatisticaFinal.css';

const EstatisticaFinal = () => {

    const [quizState, dispatch] = useContext(QuizContext);

    //Se a média for boa irá retornar true
    const isAprovado = quizState.pontuacao > quizState.questions.length / 2;
    const mediaPerguntas = Math.floor(quizState.questions.length / 2);

    console.log(mediaPerguntas);

    const img = isAprovado ? goodFace : sadFace;
  return (
    <div id='estatistica'>
        <h2>Fim de Jogo!</h2>
        <p>Você acertou {quizState.pontuacao} de {quizState.questions.length} perguntas</p>
        <img src={img} alt="fim-de-jogo" />
        {isAprovado ? <p>Parabéns, você se saiu muito bem no quiz, continue estudando!</p> 
                    : <p>Oh não, você tirou uma nota abaixo da média, mas não desanima não, tente novamente!</p>}
        <button onClick={() => dispatch( { acao: "NOVO_JOGO" } )}>Tentar Novamente</button>

    </div>
  )
}

export default EstatisticaFinal