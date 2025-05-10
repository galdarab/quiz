import { useQuiz } from "../context/quiz-provider";

export default function ResultScreen() {
  const { score, total, resetQuiz } = useQuiz();
  
  const percentage = (score / total) * 100;
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Quiz Results</h1>
      <div className="mb-8 flex justify-center">
        <div className="size-48 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-600">
              {percentage}%
            </span>
          </div>
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="100, 100"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
            />
          </svg>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mb-6 text-start">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Performance
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Total Question:</span>
            <span className="font-semibold">{total}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Correct Answers:</span>
            <span className="font-semibold">{score}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Incorrect Answers:</span>
            <span className="font-semibold">{total - score}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Accuracy:</span>
            <span className="font-semibold">{percentage}%</span>
          </li>
        </ul>
      </div>
      <button
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
        onClick={resetQuiz}
      >
        Take Quiz Again
      </button>
    </section>
  );
}
