import React from "react";
import Shapes from "./components/Shapes";
import StartMenu from "./components/StartMenu";
import QuizMenu from "./components/QuizMenu";

export default function App() {
  const [quiz, setQuiz] = React.useState(false);

  function startQuiz() {
    setQuiz((prev) => !prev);
  }

  return (
    <div>
      <Shapes />
      {quiz ? (
        <QuizMenu playAgain={startQuiz} />
      ) : (
        <StartMenu handleStart={startQuiz} />
      )}
    </div>
  );
}
