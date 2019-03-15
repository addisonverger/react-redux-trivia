import { currentQuestion, handleTimePlayed, answerCoding } from './reducerFunctions.js'

const inititalState = {
  token:'',
  questionSet: {},
  currentQuestion: {},
  score: 0,
  time: '',
  stats: {
    bestScore: 0,
    bestTime: '',
    avgScore: 0,
    timePlayed: '00:00:00',
    gamesPlayed: 0
  }
}

function deepCopy(x) {
  return JSON.parse(JSON.stringify(x))
}

const gameReducer = (state = inititalState, action) => {
  let newToken = deepCopy(state.token)
  let newQuestionSet = deepCopy(state.questionSet)
  let newCurrentQuestion = deepCopy(state.currentQuestion)
  let newScore = deepCopy(state.score)
  let newTime = deepCopy(state.time)
  let newStats = deepCopy(state.stats)

  switch (action.type) {
    case 'UPDATE_TOKEN':
      newToken = action.token
      return {
        ...state,
        token: newToken
      }

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
          answerCoding(answer)
          if (answer.isCorrect && answer.isSelected) {
            ++newScore
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

    case 'UPDATE_STATS':
      newStats.gamesPlayed++
      if (newStats.bestScore === 0 && newStats.bestTime === '') {
        newStats.bestScore = newScore
        newStats.bestTime = newTime
      }
      if (newScore > newStats.bestScore) {
        newStats.bestScore = newScore
      }
      if (newTime < newStats.bestTime) {
        newStats.bestTime = newTime
      }
      newStats.avgScore = Math.round(((newStats.avgScore * (newStats.gamesPlayed - 1)) + newScore) / newStats.gamesPlayed)
      newStats.timePlayed = handleTimePlayed(newStats.timePlayed, newTime)
      return {
        ...state,
        stats: {
          bestScore: newStats.bestScore,
          bestTime: newStats.bestTime,
          avgScore: newStats.avgScore,
          timePlayed: newStats.timePlayed,
          gamesPlayed: newStats.gamesPlayed
        }
      }

    default:
      return state
  }
}

export default gameReducer
