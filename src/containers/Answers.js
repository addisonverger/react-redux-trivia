import React, { Component } from 'react'

import {Tile} from 'react-bulma-components/full'

const Answers = (props) => {
  return (
    <Tile kind="ancestor">
      <Tile kind="parent" vertical>
        {props.currentQuestion.answers.map((answer, index) => {
          return (
            <Tile key={index}
                  kind="child"
                  color={answer.color}
                  style={{cursor: 'pointer'}}
                  onClick={() => props.selectAnswer(index)}
                  notification>
              <p>{props.decodeHtml(answer.text)}</p>
            </Tile>
          )
        })}
      </Tile>
    </Tile>
  )
}

export default Answers
