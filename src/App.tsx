import './App.css'
import Navbar from './components/Navbar/Navbar';
import HeroPage from './pages/HeroPage/HeroPage';
import QuizePage from './pages/QuizePage/QuizePage';
import ResultPage from './pages/ResultsPage/ResultPage';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import {useState} from 'react';

function App() {
  const storedSubject: string | null = localStorage.getItem("subject");
  const storedPage: string | null = localStorage.getItem("currentPage");
  const storedScore: string | null = localStorage.getItem("score");
  const [subject, setSubject] = useState<string>(storedSubject || "");
  const [currentPage, setCurrentPage] = useState<string>(storedPage  || "");
  const [score, setScore] = useState<number>(Number(storedScore) || 0);

  return (
    <>
      <Navbar subject={subject} />
      {currentPage === "Quize" ? (
        <QuizePage
          subject={subject}
          setScore={setScore}
          setCurrentPage={setCurrentPage}
        />
      ) :
        
      currentPage === "result" ? (
        <ResultPage
          ScoreCard={() => (
            <>
              <Card mark={score} total={10} title={subject}/>
              <Button
                onClick={() => {
                    setCurrentPage("");
                    localStorage.setItem("score", (0).toString());
                    localStorage.removeItem("currentPage");
                  return setSubject("");
                }}
                submit_container="submit_container"
                submit_button="submit_button"
                submit_text="Play Again"
              />
            </>
          )}
        />
        ) :
          
        (
        <HeroPage setSubject={setSubject} setCurrentPage={setCurrentPage} />
          )
      }
    </>
  );
}

export default App;
