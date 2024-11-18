export type QuestionType = 'grammar' | 'vocabulary' | 'reading';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[];
  isComplete: boolean;
}