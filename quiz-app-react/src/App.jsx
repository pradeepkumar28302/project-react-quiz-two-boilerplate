import React, { useState } from 'react';
import './App.css';
import quiz from './components/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousButtonClick = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const handleNextButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleQuitButtonClick = () => {
    const quitConfirmed = window.confirm("Are you sure you want to quit?");
    if (quitConfirmed) {
      setShowScore(true);
    }
  };

  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} out of {questions.length}</h2>
          <button onClick={handleResetButtonClick}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionA)}>
              {questions[currentQuestion].optionA}
            </button>
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionB)}>
              {questions[currentQuestion].optionB}
            </button>
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionC)}>
              {questions[currentQuestion].optionC}
            </button>
            <button onClick={() => handleAnswerButtonClick(questions[currentQuestion].optionD)}>
              {questions[currentQuestion].optionD}
            </button>
          </div>
          <div className="navigation-buttons">
            {currentQuestion > 0 && <button class="next" onClick={handlePreviousButtonClick}>Previous</button>}
            {currentQuestion < questions.length - 1 && <button class="previous" onClick={handleNextButtonClick}>Next</button>}
            <button class="quit" onClick={handleQuitButtonClick}>Quit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;