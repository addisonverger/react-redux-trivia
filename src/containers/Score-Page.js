import React, { Component } from 'react'

import {Box} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'
import {Icon} from 'react-bulma-components/full'

const ScorePage = (props) => {
  return (
    <div>
      <Box className="m-auto">
        <Level>
          <Level.Item>
            <Heading size={1}>
              Your Score
            </Heading>
          </Level.Item>
        </Level>
        <Level>
          <Level.Item>
            <Heading size={3}>
              {props.score > 7 ? 'Great Job' : null}
              {props.score > 5 && props.score < 8 ? 'Nice Work' : null}
              {props.score < 6 ? 'Better Luck Next Time' : null}
            </Heading>
          </Level.Item>
        </Level>
        <Level>
          <Level.Item>
            <Heading size={2}>
              {props.score} out of 10
            </Heading>
          </Level.Item>
        </Level>
        <Level>
          <Level.Item>
            <Heading size={2}>
              {props.time}
            </Heading>
          </Level.Item>
        </Level>
        <Level className="questionNumber">
          <Button type="button"
                  className="is-link is-medium is-fullwidth"
                  onClick={() => props.openPage('home-page')}>
            New Game
          </Button>
        </Level>
      </Box>
    </div>
  )
}

export default ScorePage
