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

var TimeFormat = require('hh-mm-ss')

const handleTimePlayed = (totalTime, currentTime) => {
  console.log(totalTime, currentTime)
  let secondsTimePlayed = TimeFormat.toS(totalTime, 'hh:mm:ss')
  console.log(secondsTimePlayed)
  let secondsTime = TimeFormat.toS(currentTime, 'hh:mm:ss')
  console.log(secondsTime)
  let sumTime = secondsTimePlayed + secondsTime
  console.log(sumTime)
  return(TimeFormat.fromS(sumTime, 'hh:mm:ss'))
}

const inititalState = {
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
  let newQuestionSet = deepCopy(state.questionSet)
  let newCurrentQuestion = deepCopy(state.currentQuestion)
  let newScore = deepCopy(state.score)
  let newTime = deepCopy(state.time)
  let newStats = deepCopy(state.stats)

  console.log(newStats)

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
      newStats.avgScore = ((newStats.avgScore * (newStats.gamesPlayed - 1)) + newScore) / newStats.gamesPlayed
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
