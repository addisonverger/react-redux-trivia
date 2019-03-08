import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Level} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

const NextQuestion = () => {
  return (
    <div>
      <Level.Side align="right">
        <Level.Item>
          <Button type="button"
                  className="is-link"
                  onClick={() => this.props.nextQuestion()}>
            Next Question
          </Button>
        </Level.Item>
      </Level.Side>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion
})

const mapDispatchToProps = (dispatch) => ({
  nextQuestion: () => dispatch({type: 'NEXT_QUESTION'})
})

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestion)
