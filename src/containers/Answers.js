import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Tile} from 'react-bulma-components/full'

const Answers = (props) => {
  return (
    <Tile kind="ancestor">
      <Tile kind="parent" vertical>
        {props.questionArray.answers.map((answer, index) => {
          return (
            <Tile key={index}
                  kind="child"
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

const mapDispatchToProps = (dispatch) => ({
  selectAnswer: (index) => dispatch({type: 'SELECT_ANSWER', index: index})
})

export default connect(null, mapDispatchToProps)(Answers)
