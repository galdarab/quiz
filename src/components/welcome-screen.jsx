import { useQuiz } from "../context/quiz-provider";

export default function WelcomeScreen() {
  const { startQuiz } = useQuiz();
  
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to QuizMaster
      </h1>
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <p className="text-gray-700 mb-4">
          Test your knowledge with our interactive quiz!
        </p>
        <ul className="text-start text-gray-600 mb-6 space-y-2">
          <li className="flex items-center">
            <span className="bg-blue-600 rounded-full size-5 flex items-center justify-center text-white text-sm me-2">
              ✓
            </span>
            5 challanging questions
          </li>
          <li className="flex items-center">
            <span className="bg-blue-600 rounded-full size-5 flex items-center justify-center text-white text-sm me-2">
              ✓
            </span>
            Instant feedback
          </li>
          <li className="flex items-center">
            <span className="bg-blue-600 rounded-full size-5 flex items-center justify-center text-white text-sm me-2">
              ✓
            </span>
            Score tracking
          </li>
        </ul>
      </div>
      <button
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
}
