import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Box} from 'react-bulma-components/full'
import {Container} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'
import {Icon} from 'react-bulma-components/full'


class ScorePage extends Component {
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
                  {this.props.score > 7 ? 'Great Job' : null}
                  {this.props.score > 5 && this.props.score < 8 ? 'Nice Work' : null}
                  {this.props.score < 6 ? 'Better Luck Next Time' : null}
                </Heading>
              </Level.Item>
            </Level>
            <Level>
              <Level.Item>
                <Heading size={2}>
                  {this.props.score} out of 10
                </Heading>
              </Level.Item>
            </Level>
            <Level className="questionNumber">
              <Button type="button"
                      className="is-link is-medium is-fullwidth"
                      onClick={() => this.props.openPage('home-page')}>
                New Game
              </Button>
            </Level>
          </Container>
        </Box>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  score: state.score
})

export default connect(mapStateToProps, null)(ScorePage)
