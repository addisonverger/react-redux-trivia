import React, { Component } from 'react'

import About from './About.js'

import {Box} from 'react-bulma-components/full'
import {Section} from 'react-bulma-components/full'
import {Container} from 'react-bulma-components/full'
import {Form} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Box className="m-auto">
          <Container>
            <Section>
              <h2 className="title is-2 is-centered">
                Trivia Game
              </h2>
            </Section>
            <Section>
              <form>
                <Form.Field>
                  <Form.Label>
                    Categories
                  </Form.Label>
                  <Form.Control>
                    <Form.Select>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </Form.Select>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>
                    Difficulty
                  </Form.Label>
                  <Form.Control>
                    <Form.Select>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </Form.Select>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Control>
                    <Button className="is-link">Play</Button>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Control>
                    <About />
                  </Form.Control>
                </Form.Field>
              </form>
            </Section>
          </Container>
        </Box>
      </div>
    )
  }
}

export default HomePage
