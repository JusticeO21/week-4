import React, { useEffect, useState } from 'react'
import ContentContainer from '../../components/ContentContainer/ContentContainer'
import TextPreview from '../../components/TextPreview/TextPreview'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import Button from '../../components/Button/Button';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import styles from './QuizePage.module.css';
import { fetchQuizData, filterQuizData, Question, findCorrectOption, handleOptionSelection, AnswerOptions } from './utils';

interface QuizePagePropsTypes {
  subject: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

function QuizePage({subject, setScore, setCurrentPage}: QuizePagePropsTypes) {
  const [quizeData, setQuizeData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<string>("")
  const [filteredData, setFilteredData] = useState<Question[]>([])
  const [goToNextQuestion, setGoToNextQuestion] = useState<boolean>(false) 
  const [showErrorMessage, setShowErrorMessage] = useState<string>("")
  const [options, setOptions] = useState<AnswerOptions>({A: '',B: '',C: '',D: '',});
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const availableOptions = Object.keys(options);

  function respondToSubmit() {
    if (!selectedAnswer) return setShowErrorMessage("show_error");

    if (questionNumber + 1 >= filteredData.length) {
      goToResultPage();
      return;
    }

    if (!goToNextQuestion) {
      handleAnswerSubmission();
    } else {
      moveToNextQuestion();
    }
  }

  function goToResultPage() {
    setCurrentPage("result");
    setQuestionNumber(0);
  }

  function handleAnswerSubmission() {
    const correctAnswer = findCorrectAnswer();
    const isCorrect = selectedAnswer === correctAnswer;

    updateAnswerStatus(isCorrect, correctAnswer);
    updateScores(isCorrect);
    setGoToNextQuestion(true);
  }

  function findCorrectAnswer() {
    const getAnswer = findCorrectOption(
      filteredData[questionNumber]["options"],
      filteredData[questionNumber]["answer"]
    );
    return availableOptions[getAnswer];
  }

  function updateAnswerStatus(isCorrect: boolean, correctAnswer: string) {
    setOptions((prev) => {
      return isCorrect
        ? { ...prev, [selectedAnswer]: "correct" }
        : {
            ...prev,
            [selectedAnswer]: "incorrect",
            [correctAnswer]: "correct",
          };
    });
  }

  function updateScores(isCorrect:boolean) {
    if (isCorrect) {
      setScore((prev) => prev + 1); 
    }
  }

  function moveToNextQuestion() {
    setGoToNextQuestion(false);
    setQuestionNumber((prev) => prev + 1);
    setCurrentQuestion(filteredData[questionNumber + 1]["question"]);
    resetAnswerSelection();
  }

  function resetAnswerSelection() {
    setSelectedAnswer("");
    setOptions({
      A: "",
      B: "",
      C: "",
      D: "",
    });
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetchQuizData("/data/data.json");
      setQuizeData(data["quizzes"]);
      const subjectData = filterQuizData(data["quizzes"], subject);
      setFilteredData(subjectData[0]["questions"]);
      setCurrentQuestion(subjectData[0]["questions"][questionNumber]["question"]);
    })();

    setIsLoading(false);
  }, []);
  

  useEffect(() => {
    const updatedQuestions = filterQuizData(quizeData, subject);
    if (updatedQuestions &&  updatedQuestions.length > 0) { 
          setFilteredData(updatedQuestions[0]["questions"]);
          setCurrentQuestion(updatedQuestions[0]["questions"][questionNumber]["question"]);  
    }
  }, [subject]);


  return (
    <>
      {isLoading ? (
        <TextPreview text="Loading..." />
      ) : (
        <div>
          <ContentContainer
            MainContent={() => (
              <>
                <TextPreview
                  text={`Question ${questionNumber + 1} of ${
                    filteredData.length
                  }`}
                />
                {currentQuestion ? (
                  <p className={styles.question}>{currentQuestion}</p>
                ) : (
                  <p className={styles.question}>Loading questions ...</p>
                )}

                <ProgressBar
                  progress={((questionNumber + 1) / filteredData.length) * 100}
                />
              </>
            )}
            Buttons={() => (
              <ButtonGroup
                Buttons={() => (
                  <>
                    {filteredData && filteredData.length > 0 && subject ? (
                      availableOptions.map((option: string, index) => (
                        <Button
                          key={option}
                          option_container="option_container"
                          option_button="option_button"
                          option={option}
                          option_text={
                            filteredData?.[questionNumber]?.options?.[index] ||
                            ""
                          }
                          customize={options[`${option}`]}
                          onClick={() => {
                            showErrorMessage && setShowErrorMessage("");
                            handleOptionSelection(
                              option,
                              setSelectedAnswer,
                              setOptions
                            );
                            return;
                          }}
                        />
                      ))
                    ) : (
                      <p>loading options</p>
                    )}
                    <Button
                      submit_container="submit_container"
                      submit_button="submit_button"
                      submit_text={
                        goToNextQuestion ? "Next Question" : "Submit Answer"
                      }
                      onClick={() => respondToSubmit()}
                    />

                    <div
                      className={`${styles.error_message} ${
                        styles[`${showErrorMessage}`]
                      }`}
                    >
                      <p>please choose an answer</p>
                      <span className={styles.error_icon}>
                        <img src="images/icon-error.svg" alt="error" />
                      </span>
                    </div>
                  </>
                )}
              />
            )}
          />
        </div>
      )}
    </>
  );
}

export default QuizePage
