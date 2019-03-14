import React, { Component } from 'react'

import {Button} from 'react-bulma-components/full'
import {Modal} from 'react-bulma-components/full'
import {Message} from 'react-bulma-components/full'
import {Level} from 'react-bulma-components/full'

class Menu extends Component {
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
        <Button type="button" className="is-link is-outlined" onClick={() => this.toggleModal()}>Menu</Button>
        <Modal show={this.state.open} onClose={() => this.toggleModal()}>
          <Modal.Content>
            <Message className="is-link">
              <Message.Header>
                Menu
              </Message.Header>
              <Message.Body>
                <Level>
                  <Button type="button"
                          className="is-link is-outlined is-medium is-fullwidth"
                          onClick={() => this.props.openPage('home-page')}>
                    Quit
                  </Button>
                </Level>
                <Level>
                  <Button type="button"
                          className="is-link is-outlined is-medium is-fullwidth"
                          onClick={() => this.toggleModal()}>
                    Continue
                  </Button>
                </Level>
              </Message.Body>
            </Message>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default Menu
