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
      nextQuestionButton: false,
      scoreButton: false
    }
  )
}

const inititalState = {
  questionSet: {},
  currentQuestion: {},
  score: 0,
  time: ''
}

function deepCopy(x) {
  return JSON.parse(JSON.stringify(x))
}

const gameReducer = (state = inititalState, action) => {
  let newQuestionSet = deepCopy(state.questionSet)
  let newCurrentQuestion = deepCopy(state.currentQuestion)
  let newScore = deepCopy(state.score)
  let newTime = deepCopy(state.time)

  switch (action.type) {
    case 'UPDATE_QUESTION_SET':
      newQuestionSet = action.data
      newCurrentQuestion = currentQuestion(action.data.results, 1, 0)
      newScore = 0
      return {
        ...state,
        questionSet: newQuestionSet,
        currentQuestion: newCurrentQuestion,
        score: newScore
      }

    case 'SELECT_ANSWER':
      let isSelected = newCurrentQuestion.answers.find((answer) => {
        return answer.isSelected === true
      })
      if (isSelected === undefined) {
        newCurrentQuestion.answers[action.index].isSelected = true
        newCurrentQuestion.answers.forEach((answer) => {
          if (answer.isCorrect) {
            answer.color = "success"
             if (answer.isSelected) {
               newScore = ++state.score
             }
          } else if (answer.isSelected && !answer.isCorrect) {
            answer.color = "danger"
          } else {
            answer.color = null
          }
        })
        if (newCurrentQuestion.questionNumber === state.questionSet.results.length) {
          newCurrentQuestion.scoreButton = true
        } else {
          newCurrentQuestion.nextQuestionButton = true
        }
      }
      return {
        ...state,
        currentQuestion: newCurrentQuestion,
        score: newScore
      }

    case 'UPDATE_QUESTION':
      newCurrentQuestion = currentQuestion(state.questionSet.results, ++state.currentQuestion.questionNumber, ++state.currentQuestion.index)
      return {
        ...state,
        currentQuestion: newCurrentQuestion
      }

    case 'UPDATE_TIME':
      newTime = action.time
      return {
        ...state,
        time: newTime
      }

    default:
      return state
  }
}

export default gameReducer
