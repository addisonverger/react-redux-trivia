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
        <Button type="button" className="is-link is-outlined is-fullwidth" onClick={() => this.toggleModal()}>About</Button>
        <Modal show={this.state.open} onClose={() => this.toggleModal()}>
          <Modal.Content>
            <Message className="is-link">
              <Message.Header>
                About
              </Message.Header>
              <Message.Body>
                Small Potatoes is a basic trivia game. First select a trivia category and
                level of difficulty. Then play a 10 question round of trivia. Keep playing
                to try and beat your best score and time.
              </Message.Body>
            </Message>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default About
