import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

const QuizContext = createContext(null);

function insertRandomPosition(arr, newItem) {
  const randomIndex = Math.floor(Math.random() * (arr.length + 1));
  arr.splice(randomIndex, 0, newItem);
  return arr;
}

async function getQuestions() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&type=multiple"
  );
  const json = await response.json();

  const questions = json.results;

  const questionsMap = questions.map(
    ({ correct_answer, incorrect_answers, question }) => ({
      id: crypto.randomUUID(),
      title: question,
      correctAnswer: correct_answer,
      options: insertRandomPosition(incorrect_answers, correct_answer),
    })
  );

  console.log(questionsMap);

  return questionsMap;
}

export default function QuizProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState("before");
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
    retry: 0,
  });

  const startQuiz = () => {
    setPhase("during");
  };

  const handleSelectedAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setPhase("after");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setPhase("before");
    setScore(0);
    setSelectedAnswer(null);
  };

  const values = {
    score,
    phase,
    currentQuestion,
    selectedAnswer,
    questions,
    total: questions ? questions.length : 0,
    startQuiz,
    handleNextQuestion,
    resetQuiz,
    handleSelectedAnswer,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz must be inside <QuizProvider />");
  }

  return context;
}
