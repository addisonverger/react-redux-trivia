import sampleQuestions from '../sampleQuestions.js'

const allAnswers = (question) => {
  let answers = question.incorrect_answers.slice().map((answer) => {
    return (
      {text: answer, isSelected: false, isCorrect: false, color: null}
    )
  })

  answers.push({text: question.correct_answer, isSelected: false, isCorrect: true, color: null})

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
      index: index,
      question: question[index].question,
      answers: allAnswers(question[index]),
      nextQuestion: false
    }
  )
}

const inititalState = {
  currentQuestion: currentQuestion(sampleQuestions.results, 1, 0)
}

function deepCopy(x) {
  return JSON.parse(JSON.stringify(x))
}

const gameReducer = (state = inititalState, action) => {
  const newCurrentQuestion = deepCopy(state.currentQuestion)

  switch (action.type) {
    case 'SELECT_ANSWER':
      newCurrentQuestion.answers[action.index].isSelected = true
      newCurrentQuestion.answers.map((answer) => {
        if (answer.isCorrect) {
          answer.color = "success"
        } else if (answer.isSelected && !answer.isCorrect) {
          answer.color = "danger"
        } else {
          answer.color = null
        }
      })
      newCurrentQuestion.nextQuestion = true
      return {
        currentQuestion: newCurrentQuestion
      }

    case 'NEXT_QUESTION':
      return {
        currentQuestion: currentQuestion(sampleQuestions.results, ++state.currentQuestion.questionNumber, ++state.currentQuestion.index)
      }

    default:
      return state
  }
}

export default gameReducer
