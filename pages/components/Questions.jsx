import React from "react";

const Questions = ({
  questions,
  activeQuestion,
  question,
  nextQuestion,
  answers,
  selectedAnswerIndex,
  checked,
  onAnswerSelected,
}) => {
  return (
    <div>
      <h3>{questions[activeQuestion].question}</h3>
      {answers.map((answer, idx) => (
        <li
          key={idx}
          onClick={() => onAnswerSelected(answer, idx)}
          className={selectedAnswerIndex == idx ? "li-selected" : "li-hover"}
        >
          <span>{answer}</span>
        </li>
      ))}
      {checked ? (
        <button onClick={nextQuestion} className="btn">
          {activeQuestion === question.length - 1 ? "Finish" : "next"}
        </button>
      ) : (
        <button disabled onClick={nextQuestion} className="btn-disabled">
          {activeQuestion === question?.length - 1 ? "Finish" : "next"}
        </button>
      )}
    </div>
  );
};

export default Questions;
