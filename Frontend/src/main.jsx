import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import Tutorial from './Components/Tutorial/tutorial';
import Login from './Components/Login/login';
import Signup from './Components/SignUp/Signup';
import About from './Components/About/About';
import Html from './Components/Tutorial/Html.jsx';
import Css from './Components/Tutorial/css.jsx';
import javaScript from './Components/Tutorial/Javascript.jsx'
import LangOpt from './Components/Quizreuse/LaguageOptions';
import HtmlDifficulty from './Components/Quizes/HtmlQuiz/HtmlDifficiculty';
import CssDifficulty from './Components/Quizes/CssQuiz/cssDifficulty';
import HtmlEasy from './Components/Quizes/HtmlQuiz/HtmlEasy'
import HtmlIntermdiate from './Components/Quizes/HtmlQuiz/HtmlIntermdiate'
import HtmlHard from './Components/Quizes/HtmlQuiz/HtmlHard'
import HtmlInterview from './Components/Quizes/HtmlQuiz/HtmlInterview';
import CssEasy from './Components/Quizes/CssQuiz/CssEasy'
import CssIntermediate from './Components/Quizes/CssQuiz/CssIntermediate'
import CssHard from './Components/Quizes/CssQuiz/CssHard'
import CssInterview from './Components/Quizes/CssQuiz/CssInterview'
import JsEasy from './Components/Quizes/JsQuiz/JsEasy'
 import JsIntermediate from './Components/Quizes/JsQuiz/JsIntermidiate'
import JsHard from './Components/Quizes/JsQuiz/JsHard'
import JsInterview from './Components/Quizes/JsQuiz/JsInterview'
import JsDifficulty from './Components/Quizes/JsQuiz/JsDifficulty';
import Scoreboard from './Components/Quizreuse/ScoreBoard';


// Create BrowserRouter and define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'Tutorial', element: <Tutorial /> },
      { path: 'About', element: <About /> },
      { path: 'Login', element: <Login /> },
      { path:'Signup', element:<Signup/>},
      { path: 'Tutorial/html', element: <Html /> },
      { path: 'Tutorial/css', element: <Css /> },
      { path: 'Tutorial/javaScript', element: <javaScript /> },
      { path: 'Quiz', element: <LangOpt /> },
      { path: 'Quiz/LangOpt/HtmlDifficulty', element: <HtmlDifficulty />},
      { path: 'Quiz/LangOpt/HtmlDifficulty/HtmlEasy', element: <HtmlEasy /> },
      { path: 'Quiz/LangOpt/HtmlDifficulty/HtmlIntermediate', element: <HtmlIntermdiate /> },
      { path: 'Quiz/LangOpt/HtmlDifficulty/HtmlHard', element: <HtmlHard /> },
      { path: 'Quiz/LangOpt/HtmlDifficulty/HtmlInterview', element: <HtmlInterview /> },
      { path: 'Quiz/LangOpt/CssDifficulty', element: <CssDifficulty/>},
      { path: 'Quiz/LangOpt/CssDifficulty/CssEasy', element: <CssEasy /> },
      { path: 'Quiz/LangOpt/CssDifficulty/CssIntermediate', element: <CssIntermediate/> },
      { path: 'Quiz/LangOpt/CssDifficulty/CssHard', element: <CssHard /> },
      { path: 'Quiz/LangOpt/CssDifficulty/CssInterview', element: <CssInterview /> },
      { path: 'Quiz/LangOpt/JsDifficulty', element: <JsDifficulty />},
      { path: 'Quiz/LangOpt/JsDifficulty/JsEasy', element: <JsEasy /> },
      { path: 'Quiz/LangOpt/JsDifficulty/JsIntermediate', element: <JsIntermediate/> },
      { path: 'Quiz/LangOpt/JsDifficulty/JsHard', element: <JsHard /> },
      { path: 'Quiz/LangOpt/JsDifficulty/JsInterview', element: <JsInterview /> },
      { path: '/Scoreboard', element: <Scoreboard /> },

    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);








