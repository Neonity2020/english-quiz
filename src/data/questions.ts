import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    type: 'grammar',
    question: 'Which sentence is grammatically correct?',
    options: [
      'They was going to the store.',
      'They were going to the store.',
      'They is going to the store.',
      'They be going to the store.'
    ],
    correctAnswer: 1,
    explanation: 'Use "were" with plural subjects in the past tense.'
  },
  {
    id: 2,
    type: 'vocabulary',
    question: 'What is the meaning of "benevolent"?',
    options: [
      'Kind and generous',
      'Angry and hostile',
      'Tired and lazy',
      'Quick and energetic'
    ],
    correctAnswer: 0,
    explanation: 'Benevolent means kind and generous, showing goodwill.'
  },
  {
    id: 3,
    type: 'reading',
    question: 'Based on the context: "The autumn leaves rustled in the gentle breeze." What season is it?',
    options: [
      'Summer',
      'Winter',
      'Fall',
      'Spring'
    ],
    correctAnswer: 2,
    explanation: 'Autumn leaves are mentioned, and autumn is another word for fall.'
  }
];