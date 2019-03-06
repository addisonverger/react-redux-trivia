import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Tile} from 'react-bulma-components/full'

const answerSelect = (answer) => {
  if (answer.isCorrect) {
    return "success"
  } else if (answer.isSelected && !answer.isCorrect) {
    return "danger"
  } else {
    return "null"
  }
}

class Answers extends Component {
  render() {
    return (
      <Tile kind="ancestor">
        <Tile kind="parent" vertical>
          {this.props.currentQuestion.answers.map((answer, index) => {
            console.log(this.props)
            return (
              <Tile key={index}
                    kind="child"
                    color={this.props.currentQuestion.isAnswered ? answerSelect(answer[index]) : null}
                    onClick={() => this.props.selectAnswer(index)}
                    notification>
                <p>{answer.text}</p>
              </Tile>
            )
          })}
        </Tile>
      </Tile>
    )
  }
}

const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion
})

const mapDispatchToProps = (dispatch) => ({
  selectAnswer: (index) => dispatch({type: 'SELECT_ANSWER', index: index})
})

export default connect(mapStateToProps, mapDispatchToProps)(Answers)
