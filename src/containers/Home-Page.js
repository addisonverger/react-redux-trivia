import React, { Component } from 'react'

import {Box} from 'react-bulma-components/full'
import {Section} from 'react-bulma-components/full'
import {Container} from 'react-bulma-components/full'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Box className="m-auto">
          <Section>
            <Container>
              <h2 className="title is-2 is-centered">
                Trivia
              </h2>
            </Container>
          </Section>
        </Box>
      </div>
    )
  }
}

export default HomePage
