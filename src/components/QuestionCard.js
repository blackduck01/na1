// src/components/QuestionCard.js

export default function QuestionCard({ questionData, onSelect }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md text-center">
      <h2 className="text-xl font-semibold text-pink-600 mb-6">{questionData.question}</h2>
      <div className="space-y-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option.score)}
            className="block w-full bg-pink-100 hover:bg-pink-300 text-pink-900 font-medium py-3 px-6 rounded-full transition duration-200"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}