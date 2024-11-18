import { useState } from 'react';
import { questions } from './data/questions';
import { QuizState } from './types/quiz';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import QuizSummary from './components/QuizSummary';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: new Array(questions.length).fill(null),
    isComplete: false
  });

  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      answers: prev.answers.map((ans, i) => 
        i === prev.currentQuestionIndex ? answerIndex : ans
      )
    }));
    setShowFeedback(true);

    setTimeout(() => {
      const isCorrect = answerIndex === questions[quizState.currentQuestionIndex].correctAnswer;
      
      setQuizState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        currentQuestionIndex: 
          prev.currentQuestionIndex < questions.length - 1 
            ? prev.currentQuestionIndex + 1 
            : prev.currentQuestionIndex,
        isComplete: prev.currentQuestionIndex === questions.length - 1
      }));
      setShowFeedback(false);
    }, 2000);
  };

  const handleRetry = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: new Array(questions.length).fill(null),
      isComplete: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">English Quiz</h1>
        
        {!quizState.isComplete ? (
          <>
            <ProgressBar
              current={quizState.currentQuestionIndex}
              total={questions.length}
              score={quizState.score}
            />
            <QuestionCard
              question={questions[quizState.currentQuestionIndex]}
              selectedAnswer={quizState.answers[quizState.currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
              showFeedback={showFeedback}
            />
          </>
        ) : (
          <QuizSummary
            questions={questions}
            answers={quizState.answers}
            score={quizState.score}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
}

export default App;