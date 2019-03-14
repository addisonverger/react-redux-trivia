import React, { Component } from 'react'

import {Level} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

function handleClick(props) {
  props.openPage('score-page')
  props.updateTime(props.currentTime)
  props.updateStats()
}

const ScoreButton = (props) => {
  return (
    <div>
      <Level.Side align="right">
        <Level.Item>
          <Button type="button"
                  className="is-link is-outlined"
                  onClick={() => handleClick(props)}>
            Final Score
          </Button>
        </Level.Item>
      </Level.Side>
    </div>
  )
}

export default ScoreButton
