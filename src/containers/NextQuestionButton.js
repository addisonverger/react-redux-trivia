import React, { Component } from 'react'

import {Level} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

const NextQuestionButton = (props) => {
  return (
    <div>
      <Level.Side align="right">
        <Level.Item>
          <Button type="button"
                  className="is-link is-outlined"
                  onClick={() => props.updateQuestion()}>
            Next Question
          </Button>
        </Level.Item>
      </Level.Side>
    </div>
  )
}

export default NextQuestionButton
