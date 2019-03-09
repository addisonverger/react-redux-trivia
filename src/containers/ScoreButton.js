import React, { Component } from 'react'

import {Level} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

const ScoreButton = (props) => {
  return (
    <div>
      <Level.Side align="right">
        <Level.Item>
          <Button type="button"
                  className="is-link"
                  onClick={() => props.openPage('score-page')}>
            Final Score
          </Button>
        </Level.Item>
      </Level.Side>
    </div>
  )
}

export default ScoreButton
