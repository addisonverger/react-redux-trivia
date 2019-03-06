import React, { Component } from 'react'
import { connect } from 'react-redux'

import Answers from './Answers.js'

import {Box} from 'react-bulma-components/full'
import {Container} from 'react-bulma-components/full'
import {Section} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'
import {Icon} from 'react-bulma-components/full'
import {Tile} from 'react-bulma-components/full'


class GamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Box className="m-auto">
          <Container>
            <Level renderAs="nav">
              <Level.Side align="left">
                <Level.Item>
                  <Heading size={4}>
                    {this.props.currentQuestion.category}
                  </Heading>
                </Level.Item>
              </Level.Side>
              <Level.Side align="right">
                <Level.Item>
                  <Heading size={4}>
                    Menu
                  </Heading>
                </Level.Item>
              </Level.Side>
            </Level>
            <Tile kind="ancestor">
              <Tile kind="parent">
                <Tile kind="child" notification color="link">
                  <p>{this.props.currentQuestion.question}</p>
                </Tile>
              </Tile>
            </Tile>
            <Answers questionArray={this.props.currentQuestion} />
          </Container>
          <Level renderAs="nav" className="questionNumber">
            <Level.Item style={{textAlign: 'center'}}>
              <Heading size={4}>
                {this.props.currentQuestion.questionNumber}/10
              </Heading>
            </Level.Item>
          </Level>
        </Box>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion
})

const mapDispatchToProps = (dispatch) => ({
  updateQuestion: (currentQuestion) => dispatch({type: 'NEXT_QUESTION'})
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
