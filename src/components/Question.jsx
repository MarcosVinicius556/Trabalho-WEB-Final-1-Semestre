import React from 'react';
import { useContext } from 'react';
// import { useEffect } from 'react';
import { QuizContext } from '../context/quiz';
import Opcoes from './Opcoes';

import "./Question.css";



const Question = () => {

    
    const [quizState, dispatch] = useContext(QuizContext);
    const perguntaAtual = quizState.questions[quizState.perguntaAtual];
    
  //Ao executar uma nova tela, irá resetar o valor
//   useEffect(() =>{
//     console.log("Ao abrir uma nova tela, chegou aqui!");
//     dispatch( { acao: "REORDENAR" } );
//   }, []);
  
    //Chamado pelo componente Opcoes, que é ativado dentro do componente
  const getSelected = (opcao) => {
    console.log("Chegou aqui!")
    dispatch({
        acao: "VERIFICA_RESP",
        //useReducer --> payload => Manda um objeto contendo os dados da resposta
        payload: {resposta: perguntaAtual.answer, opcao}
    })
  }
  return (


    <div id='question'>
        <p>Pergunta {quizState.perguntaAtual + 1} de {quizState.questions.length}</p>
        <h2>{perguntaAtual.question}</h2>

        <div id="opcoes-container">
            <span>{perguntaAtual.options.map((opcao) => (
                <Opcoes opcao={opcao} 
                        key={opcao} 
                        resposta={perguntaAtual.answer}
                        opcaoSelecionada={() => getSelected(opcao)}
                />
                ))}</span>
        </div>
        {quizState.isRespondido && ( 
        //Se for respondido habilita o botão para prosseguir
            <button onClick={() => dispatch( { acao: "AVANCA" } )}>
                Continuar
            </button>
        )}
    </div>
  )
}

export default Question