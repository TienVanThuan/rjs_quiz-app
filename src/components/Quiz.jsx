import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import quizData from "../data/questions.json";
import Result from "./Result";

const Quiz = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: quizData.questions.length })
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const answer = Number(userAnswers[currentQuestion]);
    const pastOptionSelected =
      quizData.questions[currentQuestion].options[answer];

    if (answer !== undefined) {
      setOptionSelected(pastOptionSelected);
    } else {
      setOptionSelected("");
    }
  }, [currentQuestion, userAnswers]);

  const handleSelectedOption = (option, index) => {
    setOptionSelected(option);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);

    if (option === quizData.questions[currentQuestion].correct_answer) {
      setScore((prev) => prev + 1);
    }
  };

  const next = () => {
    if (currentQuestion === quizData.questions.length - 1) {
      setIsQuizEnded(true);
    } else {
      if (
        currentQuestion <
        quizData.questions[currentQuestion].question.length - 1
      ) {
        setCurrentQuestion((prev) => prev + 1);
        setOptionSelected(userAnswers[currentQuestion + 1]);
      }
    }
  };

  const previous = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setOptionSelected(userAnswers[currentQuestion - 1]);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
    setOptionSelected("");
    setScore(0);
    setUserAnswers(Array.from({ length: quizData.questions.length }));
  };

  const reviewQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
  };

  if (isQuizEnded) {
    return (
      <Result
        score={score}
        totalQuestionNum={quizData.questions.length}
        restartQuiz={restartQuiz}
        reviewQuiz={reviewQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Cau {quizData.questions[currentQuestion].id}</h2>
      <p className="questions">
        {quizData.questions[currentQuestion].question}
      </p>
      {quizData.questions[currentQuestion].options.map((option, index) => (
        <button
          key={option}
          className={`option ${optionSelected === option ? "selected" : ""}`}
          disabled={!!optionSelected && optionSelected !== option}
          onClick={() => handleSelectedOption(option, index)}
        >
          {option}
        </button>
      ))}

      {optionSelected ? (
        optionSelected ===
        quizData.questions[currentQuestion].correct_answer ? (
          <p className="correct-answer">
            {optionSelected} la cau tra loi chinh xac
          </p>
        ) : (
          <p className="incorrect-answer">
            {optionSelected} la cau tra loi chua chinh xac
          </p>
        )
      ) : (
        ""
      )}

      <div className="nav-buttons">
        <button onClick={previous} disabled={currentQuestion === 0}>
          Quay lai
        </button>
        <button onClick={next} disabled={!optionSelected}>
          {currentQuestion === quizData.questions.length - 1
            ? "Hoan thanh quiz"
            : "Tiep theo"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
