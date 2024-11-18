import { type FC } from 'react';
import { Question } from '../types/quiz';

interface QuizSummaryProps {
  questions: Question[];
  answers: (number | null)[];
  score: number;
  onRetry: () => void;
}

const QuizSummary: FC<QuizSummaryProps> = ({
  questions,
  answers,
  score,
  onRetry
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-lg mb-6">Your score: {score} out of {questions.length}</p>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Review Incorrect Answers:</h3>
        {questions.map((question, index) => {
          const isCorrect = answers[index] === question.correctAnswer;
          if (!isCorrect) {
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium mb-2">{question.question}</p>
                <p className="text-red-600">Your answer: {question.options[answers[index] ?? 0]}</p>
                <p className="text-green-600">Correct answer: {question.options[question.correctAnswer]}</p>
                <p className="text-gray-600 mt-2">{question.explanation}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      
      <button
        onClick={onRetry}
        className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default QuizSummary;