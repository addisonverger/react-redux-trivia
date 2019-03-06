import sampleQuestions from '../sampleQuestions.js'

const allAnswers = (question) => {
  let answers = question.incorrect_answers.slice().map((answer) => {
    return (
      {text: answer, isSelected: false, isCorrect: false}
    )
  })

  answers.push({text: question.correct_answer, isSelected: false, isCorrect: true})

  for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

  return answers
}

const currentQuestion = (question, questionNumber, index) => {
  return (
    {
      category: question[index].category,
      questionNumber: questionNumber,
      question: question[index].question,
      answers: allAnswers(question[index])
    }
  )
}

const inititalState = {
  currentQuestion: currentQuestion(sampleQuestions.results, 1, 0)
}

const gameReducer = (state = inititalState, action) => {
  const newCurrentQuestion = {...state}

  switch (action.type) {
    case 'SELECT_ANSWER':
      newCurrentQuestion.answers[action.index].isSelected = true
      return {
        currentQuestion: newCurrentQuestion
      }

    default:
      return state
  }
}

export default gameReducer
