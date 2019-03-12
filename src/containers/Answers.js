import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Tile} from 'react-bulma-components/full'

class Answers extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleSelectAnswer(index) {
    let isSelected = this.props.currentQuestion.answers.find((answer) => {
      return answer.isSelected === true
    })
    if (isSelected === undefined) {
      this.props.selectAnswer(index)
    }
  }
  render() {
    return (
      <Tile kind="ancestor">
        <Tile kind="parent" vertical>
          {this.props.currentQuestion.answers.map((answer, index) => {
            return (
              <Tile key={index}
                    kind="child"
                    color={answer.color}
                    onClick={() => this.handleSelectAnswer(index)}
                    notification>
                <p>{this.props.decodeHtml(answer.text)}</p>
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
