import { type FC } from 'react';
import { Question } from '../types/quiz';
import classNames from 'classnames';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  showFeedback: boolean;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showFeedback
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
          {question.type.charAt(0).toUpperCase() + question.type.slice(1)}
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && onAnswerSelect(index)}
            className={classNames(
              'w-full p-3 text-left rounded-lg transition-colors',
              {
                'hover:bg-gray-100': !showFeedback,
                'bg-gray-100': selectedAnswer === index && !showFeedback,
                'bg-green-100': showFeedback && index === question.correctAnswer,
                'bg-red-100': showFeedback && selectedAnswer === index && index !== question.correctAnswer
              }
            )}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;