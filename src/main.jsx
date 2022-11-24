import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
/*
 * Irá prover os contextos para a aplicação toda
 */
import {QuizProvider} from './context/quiz.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Encapsula o componente principal */}
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
)
