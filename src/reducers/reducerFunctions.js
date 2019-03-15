export const allAnswers = (question) => {
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

export const currentQuestion = (question, questionNumber, index) => {
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

export const handleTimePlayed = (totalTime, currentTime) => {
  let secondsTimePlayed = TimeFormat.toS(totalTime, 'hh:mm:ss')
  let secondsTime = TimeFormat.toS(currentTime, 'hh:mm:ss')
  let sumTime = secondsTimePlayed + secondsTime
  return(TimeFormat.fromS(sumTime, 'hh:mm:ss'))
}

export const answerCoding = (answer) => {
  if (answer.isCorrect) {
    answer.color = "success"
  } else if (answer.isSelected && !answer.isCorrect) {
    answer.color = "danger"
  } else {
    answer.color = null
  }
}
