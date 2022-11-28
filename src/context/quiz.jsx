import { createContext, useReducer } from "react";
import questions from '../data/questions';

//Estágios do game
const estagios = ["Start","Playing","End"];

/*
 * Reducer gerencia estados de objetos 
 */

const initialState = {
    gameStage: estagios[0],
    questions,
    perguntaAtual: 0,
    pontuacao: 0,
    isRespondido: false,
    assunto: 'web',
    professor: 'Sabrina'
}

const quizReducer = (state, action) => {
    console.log(state, action);
    switch(action.acao){
        case "MUDA_ESTADO":
            return {
                // Salva o estado/objeto anterior como o estágio anterior por exemplo
                ...state,
                gameStage: estagios[1],
            };
        case "REORDENAR":
            // console.log("Chegou aqui!");
            // console.log(questions);
            const questoes = questions.sort(() => {
                return Math.random() - 0.5;
            });
            // console.log("________________________________");
            // console.log(questoes);
            return {
                ...state, //Guarda estado
                questions: questoes, //Atribui as perguntas reordenadas para a variável questions
            }
        case "AVANCA":
            const proximaPergunta = state.perguntaAtual + 1;
            // console.log(proximaPergunta);
            let fimDeJogo = false;
            if(!questions[proximaPergunta]){
                fimDeJogo = true;
            }
            return {
                ...state,
                perguntaAtual: proximaPergunta,
                gameStage: fimDeJogo ? estagios[2] : state.gameStage,
                isRespondido: false
            }
            case "NOVO_JOGO":
                return initialState;
            case "VERIFICA_RESP":
                //Não permite que fique selecionando mais de uma vez a mesma questão
                if(state.isRespondido) return state; 
                const resp = action.payload.resposta;
                const opcao = action.payload.opcao;
                let respCorreta = 0;

                if(resp === opcao) respCorreta = 1;

                console.log("---------------------");
                console.log(resp);
                console.log(opcao);
                console.log(respCorreta);
                console.log("---------------------");

                return{
                    ...state,
                    pontuacao: state.pontuacao + respCorreta, //Atribui a pontuação pro usuário
                    isRespondido: opcao, //Habilita o botão pro usuário somente depois que ele selecionar uma opção
                } ;
        default:
            return state;
    }
}

//Contexto para prover
export const QuizContext = createContext();

/**
 * children é utilizado para encapsular componentes
 * dentro de outro componente
 */
//retorna o context
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};
