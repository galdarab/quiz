import Header from "./header";
import QuestionCard from "./question-card";
import ResultScreen from "./result-screen";
import WelcomeScreen from "./welcome-screen";
import { useQuiz } from "../context/quiz-provider";

export default function QuizApp() {
  const { handleNextQuestion, selectedAnswer, currentQuestion, phase, total } =
    useQuiz();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        {phase === "before" && <WelcomeScreen />}
        {phase === "during" && (
          <>
            <Header />
            <QuestionCard />
            <div className="p-6 pt-0">
              <button
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition disabled:bg-blue-300 disabled:cursor-not-allowed"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
              >
                {currentQuestion === total - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          </>
        )}
        {phase === "after" && <ResultScreen />}
      </div>
    </div>
  );
}
