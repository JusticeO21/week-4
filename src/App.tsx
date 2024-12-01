import './App.css'
import Navbar from './components/Navbar/Navbar';
import HeroPage from './pages/HeroPage/HeroPage';
import QuizePage from './pages/QuizePage/QuizePage';
import ResultPage from './pages/ResultsPage/ResultPage';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import { useState} from 'react';

function App() {

  const [subject, setSubject] = useState<string>("");
  const [currentPage, setCurrentPage] = useState("");
  const [score, setScore] = useState<number>(0);

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

export default App
