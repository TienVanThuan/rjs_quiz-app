import React from "react";

const Result = ({ score, totalQuestionNum, restartQuiz, reviewQuiz }) => {
  return (
    <div>
      <h2>Ket qua</h2>
      <p className="result">
        Ban tra loi dung {score}/{totalQuestionNum} cau
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={reviewQuiz}>
          Xem lai
        </button>
        <button className="result-button" onClick={restartQuiz}>
          Lam lai
        </button>
      </div>
    </div>
  );
};

export default Result;
