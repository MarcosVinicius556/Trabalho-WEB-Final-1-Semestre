import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Opcoes.css';


const Opcoes = ({ opcao, opcaoSelecionada, resposta }) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={`opcoes 
                    ${quizState.isRespondido &&  opcao === resposta ? 'correto' : ""}
                    ${quizState.isRespondido &&  opcao !== resposta ? 'errado' : ""}`} onClick={() => opcaoSelecionada()}>
        <span>{opcao}</span>
    </div>
  )
}



export default Opcoes