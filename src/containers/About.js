import React, { Component } from 'react'

import {Button} from 'react-bulma-components/full'
import {Modal} from 'react-bulma-components/full'
import {Message} from 'react-bulma-components/full'

class About extends Component {
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
        <Button type="button" className="is-link" onClick={() => this.toggleModal()}>About</Button>
        <Modal show={this.state.open} onClose={() => this.toggleModal()}>
          <Modal.Content>
            <Message className="is-link">
              <Message.Header>
                About
              </Message.Header>
              <Message.Body>
                Trivia is a basic trivia game. Users can select the trivia category,
                the level of difficulty and play a round of trivia.
              </Message.Body>
            </Message>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default About
