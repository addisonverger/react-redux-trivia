import React, { Component } from 'react'

import Answers from './Answers.js'
import Menu from './Menu.js'
import NextQuestionButton from './NextQuestionButton.js'
import ScoreButton from './ScoreButton.js'

import {Box} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'
import {Icon} from 'react-bulma-components/full'
import {Tile} from 'react-bulma-components/full'

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const GamePage = (props) => {
  return (
    <div>
      <Box className="m-auto">
        <Level renderAs="nav">
          <Level.Side align="left">
            <Level.Item>
              <Heading size={4}>
                {props.currentQuestion.category}
              </Heading>
            </Level.Item>
          </Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Menu openPage={props.openPage}/>
            </Level.Item>
          </Level.Side>
        </Level>
        <Tile kind="ancestor">
          <Tile kind="parent">
            <Tile kind="child" notification color="primary">
              <p>{decodeHtml(props.currentQuestion.question)}</p>
            </Tile>
          </Tile>
        </Tile>
        <Answers decodeHtml={decodeHtml}
                  currentQuestion={props.currentQuestion}
                  selectAnswer={props.selectAnswer}/>
        <Level renderAs="nav" className="questionNumber">
          <Level.Item style={{textAlign: 'center'}}>
            <Heading size={4}>
              {props.currentQuestion.questionNumber}/10
            </Heading>
          </Level.Item>
          {props.currentQuestion.nextQuestionButton ?
            <NextQuestionButton updateQuestion={props.updateQuestion}/> : ''}
          {props.currentQuestion.scoreButton ?
            <ScoreButton openPage={props.openPage}/> : ''}
        </Level>
      </Box>
    </div>
  )
}

export default GamePage
