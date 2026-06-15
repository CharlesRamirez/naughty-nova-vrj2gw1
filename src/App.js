import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}
const questions = [
  {
    id: 3457,
    question: "What language is react based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps",
    answer: "Components",
  },
  {
    id: 8532,
    question:
      "what is the name of the syntax we use to describe the UI inreact",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "props",
  },
  {
    id: 9183,
    question: "How to give components memory?",
    answer: "useState Hook",
  },
  {
    id: 2002,
    question:
      "What do we call an imput element that is completely synchronised ",
    answer: "controled elements",
  },
];
function FlashCards() {
  const [selectedId, setSelectedId] = useState(9183);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : "null");
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
