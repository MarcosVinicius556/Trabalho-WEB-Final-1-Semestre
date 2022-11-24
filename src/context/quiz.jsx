import { createContext, useReducer } from "react";
import questions from '../data/questions';

//Estágios do game
const estagios = ["Start","Playing","End"];

/*
 * Reducer gerencia estados de objetos 
 */

const initialState = {
    gameStage: estagios[0],
    questions
}

const quizReducer = (state, action) => {
    console.log(state, action);
    switch(action.acao){
        case "CHANGE_STATE":
            return state;
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
