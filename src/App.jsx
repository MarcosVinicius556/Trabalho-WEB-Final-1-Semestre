import './App.css'

import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Question from './components/question';
import Welcome from './components/Welcome';
import EstatisticaFinal from './components/EstatisticaFinal';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  /*
    Ao iniciar a aplicação vai embaralhar as questões
   */
  useEffect(() =>{
    dispatch( { acao: "REORDENAR" } );
  }, []);

  return (
    <div className="App">
      {/* Se já estiver jogando imprime a pontuação atual */}
      {(quizState.gameStage === "Playing" && quizState.gameStage !== "End") && 
                <div id='pontuacao'>
                    <p>Pontuacao: <span>{quizState.pontuacao}</span></p>
                </div>}
      <h1>Quiz sobre <span>{quizState.assunto}</span>!</h1>
      {/* Se o state da aplicação for Start mantém na tela de welcome  */}
      {quizState.gameStage === "Start" && <Welcome />}
      {/* Se não direciona para o componente Question  */}
      {quizState.gameStage === "Playing" && <Question />}
      {/* Se não direciona para o componente Question  */}
      {quizState.gameStage === "End" && <EstatisticaFinal />}
        
    </div>
  )
}

export default App
