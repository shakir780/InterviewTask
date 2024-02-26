import React from "react";

const Results = ({ questions, selectedAnswers }) => {
  return (
    <div className="quiz-container">
      <h3>Results</h3>
      <h3>Selected Answers:</h3>
      {questions.map((q, idx) => (
        <div key={idx}>
          <p>
            Question Q{idx + 1}: {q.question}
          </p>
          <p>Selected Answer: {selectedAnswers[idx]}</p>
          <p>Available Answers: {JSON.stringify(q.answers)}</p>
          <hr />
        </div>
      ))}
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  );
};

export default Results;
