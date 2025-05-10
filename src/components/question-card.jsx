import { useQuiz } from "../context/quiz-provider";

// פונקציה לפענוח HTML Entities
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default function QuestionCard() {
  const { questions, currentQuestion, selectedAnswer, handleSelectedAnswer } =
    useQuiz();

  const question = questions[currentQuestion];

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {decodeHtml(question.title)} {/* פענוח של כותרת השאלה */}
      </h2>
      <ul className="space-y-3">
        {question.options.map((option, index) => (
          <li
            onClick={() => handleSelectedAnswer(option)}
            key={option}
            className={`p-4 border-2 rounded-lg cursor-pointer transition ${
              selectedAnswer === option
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
            role="radio"
          >
            <div className="flex items-center">
              <div
                className={`size-6 rounded-full flex items-center justify-center me-3 ${
                  selectedAnswer === option
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-gray-700">{decodeHtml(option)}</span> {/* פענוח של האופציות */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
