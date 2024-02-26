"use client";
import React, { useState } from "react";
import { quiz } from "../../data.js";
import Results from "../components/Results.jsx";
import Questions from "../components/Questions.jsx";
const index = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [checked, setChecked] = useState(false);

  // This line initializes a state variable selectedAnswers.
  //It's an array that keeps track of the selected answer for each question in the quiz.
  //The initial state is an array filled with null values.
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz.questions.length).fill(null)
  );

  const [showResult, setShowResult] = useState(false);

  // Destructure the questions property from the quiz object
  const { questions } = quiz;

  // Destructure the question and answers properties from the active question in the questions array
  const { question, answers } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);

    // Copy the current selectedAnswers array
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[activeQuestion] = answer;

    // Update the state with the new array
    setSelectedAnswers(updatedSelectedAnswers);
    setSelectedAnswerIndex(idx);
  };

  const nextQuestion = () => {
    // Reset selectedAnswerIndex to null for the next question
    setSelectedAnswerIndex(null);

    // Check if the current active question is not the last question in the quiz
    if (activeQuestion !== questions.length - 1) {
      // If not the last question, go to the next page
      setActiveQuestion((prev) => prev + 1);
    } else {
      // If it is the last question, reset activeQuestion to 0 and set showResult to true
      setActiveQuestion(0);
      setShowResult(true);
    }

    // Reset checked to false for the next question or quiz result
    setChecked(false);
  };
  return (
    <div className="container">
      <h1>Investment Quiz Page</h1>
      <div>
        <h2>
          Question {activeQuestion + 1}/ <span>{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <Questions
              questions={questions}
              activeQuestion={activeQuestion}
              question={question}
              nextQuestion={nextQuestion}
              answers={answers}
              selectedAnswerIndex={selectedAnswerIndex}
              checked={checked}
              onAnswerSelected={onAnswerSelected}
            />
          </div>
        ) : (
          <Results questions={questions} selectedAnswers={selectedAnswers} />
        )}
      </div>
    </div>
  );
};

export default index;
