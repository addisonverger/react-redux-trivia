import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Button} from 'react-bulma-components/full'
import {Modal} from 'react-bulma-components/full'
import {Message} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  toggleModal() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div>
        <Button type="button" className="is-link is-outlined is-fullwidth" onClick={() => this.toggleModal()}>My Stats</Button>
        <Modal show={this.state.open} onClose={() => this.toggleModal()}>
          <Modal.Content>
            <Message className="is-link">
              <Message.Header>
                My Stats
              </Message.Header>
              <Message.Body>
                <Level>
                  <Level.Item>
                    <Heading size={3}>
                      Best Score: {this.props.bestScore}
                    </Heading>
                  </Level.Item>
                </Level>
                <Level>
                  <Level.Item>
                    <Heading size={3}>
                      Best Time: {this.props.bestTime}
                    </Heading>
                  </Level.Item>
                </Level>
                <Level>
                  <Level.Item>
                    <Heading size={3}>
                      Average Score: {this.props.avgScore}
                    </Heading>
                  </Level.Item>
                </Level>
                <Level>
                  <Level.Item>
                    <Heading size={3}>
                      Time Played: {this.props.timePlayed}
                    </Heading>
                  </Level.Item>
                </Level>
              </Message.Body>
            </Message>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  bestScore: state.stats.bestScore,
  bestTime: state.stats.bestTime,
  avgScore: state.stats.avgScore,
  timePlayed: state.stats.timePlayed
})

export default connect(mapStateToProps, null)(Stats)
