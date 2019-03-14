import React, { Component } from 'react'
import { connect } from 'react-redux'

import Answers from './Answers.js'
import Menu from './Menu.js'
import NextQuestionButton from './NextQuestionButton.js'
import ScoreButton from './ScoreButton.js'

import {Box} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'
import {Tile} from 'react-bulma-components/full'

var Timer = require('easytimer.js').Timer;

class GamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null,
      currentTime: ''
    }
    this.incrementTimer = this.incrementTimer.bind(this);
  }
  componentDidMount() {
    let timer = new Timer()
    this.setState({
      timer: timer
    })
    timer.start()
    timer.addEventListener('secondsUpdated', this.incrementTimer);
  }
  incrementTimer(e) {
    let timer = this.state.timer
    const newTime = timer.getTimeValues().toString()
    this.setState({
      currentTime: newTime
    })
  }
  componentWillUnmount() {
    let timer = this.state.timer
    timer.stop()
  }
  decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
  }
  render() {
    return (
      <div>
        <Box className="m-auto">
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
              <Tile kind="child" notification color="dark">
                <p>{this.decodeHtml(this.props.currentQuestion.question)}</p>
              </Tile>
            </Tile>
          </Tile>
          <Answers decodeHtml={this.decodeHtml}
                    currentQuestion={this.props.currentQuestion}
                    selectAnswer={this.props.selectAnswer}/>
          <Level renderAs="nav" className="questionNumber">
            <Level.Item style={{textAlign: 'center'}}>
              <Heading size={4}>
                {this.props.currentQuestion.questionNumber}/10
              </Heading>
            </Level.Item>
            {this.props.currentQuestion.nextQuestionButton ?
              <NextQuestionButton updateQuestion={this.props.updateQuestion}/> : ''}
            {this.props.currentQuestion.scoreButton ?
              <ScoreButton openPage={this.props.openPage}
                            updateTime={this.props.updateTime}
                            currentTime={this.state.currentTime}
                            updateStats={this.props.updateStats}/> : ''}
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
  updateQuestion: () => dispatch({type: 'UPDATE_QUESTION'}),
  selectAnswer: (index) => dispatch({type: 'SELECT_ANSWER', index: index}),
  updateTime: (time) => dispatch({type: 'UPDATE_TIME', time: time}),
  updateStats: () => dispatch({type: 'UPDATE_STATS'})
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)
