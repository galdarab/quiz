import { useQuiz } from "../context/quiz-provider";

export default function Header() {
  const { score, total, currentQuestion } = useQuiz();
  const percentage = (currentQuestion / total) * 100;

  return (
    <header className="bg-blue-600 p-6 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">QuizMaster</h1>
        <div className="text-sm bg-white text-blue-600 px-3 py-1 rounded-full">
          Score: {score}
        </div>
      </div>
      <div className="mt-4 mb-2">
        <div className="flex justify-between text-sm">
          <span>
            Question {currentQuestion + 1} of {total}
          </span>
          <span>{percentage}% Complete</span>
        </div>
        <div className="w-full bg-blue-300 rounded-full h-2 mt-2">
          <div
            style={{ width: `${percentage}%` }}
            className="bg-white h-2 rounded-full"
          ></div>
        </div>
      </div>
    </header>
  );
}
