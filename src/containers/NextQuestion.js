import React, { Component } from 'react'

import {Level} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

const NextQuestion = (props) => {
  return (
    <div>
      <Level.Side align="right">
        <Level.Item>
          <Button type="button"
                  className="is-link"
                  onClick={() => props.nextQuestion()}>
            Next Question
          </Button>
        </Level.Item>
      </Level.Side>
    </div>
  )
}

export default NextQuestion
