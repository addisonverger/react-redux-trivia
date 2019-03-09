import React, { Component } from 'react'
import { connect } from 'react-redux'

import Answers from './Answers.js'
import Menu from './Menu.js'
import NextQuestionButton from './NextQuestionButton.js'
import ScoreButton from './ScoreButton.js'

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
                  <Menu openPage={this.props.openPage}/>
                </Level.Item>
              </Level.Side>
            </Level>
            <Tile kind="ancestor">
              <Tile kind="parent">
                <Tile kind="child" notification color="primary">
                  <p>{this.props.currentQuestion.question}</p>
                </Tile>
              </Tile>
            </Tile>
            <Answers />
          </Container>
          <Level renderAs="nav" className="questionNumber">
            <Level.Item style={{textAlign: 'center'}}>
              <Heading size={4}>
                {this.props.currentQuestion.questionNumber}/10
              </Heading>
            </Level.Item>
            {this.props.currentQuestion.nextQuestionButton ?
              <NextQuestionButton updateQuestion={this.props.updateQuestion}/> : ''}
            {this.props.currentQuestion.scoreButton ?
              <ScoreButton openPage={this.props.openPage}/> : ''}
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
  updateQuestion: () => dispatch({type: 'UPDATE_QUESTION'})
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
