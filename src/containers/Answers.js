import React, { Component } from 'react'

import {Tile, Columns, Icon} from 'react-bulma-components/full'

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
              <Columns>
                <Columns.Column size={11}>
                  <p>{props.decodeHtml(answer.text)}</p>
                </Columns.Column>
                <Columns.Column size={1}>
                  {answer.color === 'success' ?
                  <Icon>
                    <i className="fas fa-check"></i>
                  </Icon> : ''}
                  {answer.color === 'danger' ?
                  <Icon>
                    <i className="fas fa-times"></i>
                  </Icon> : ''}
                </Columns.Column>
              </Columns>
            </Tile>
          )
        })}
      </Tile>
    </Tile>
  )
}

export default Answers
