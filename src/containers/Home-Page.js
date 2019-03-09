import React, { Component } from 'react'
import axios from 'axios'

import About from './About.js'

import {Box} from 'react-bulma-components/full'
import {Section} from 'react-bulma-components/full'
import {Container} from 'react-bulma-components/full'
import {Form} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }
  // handlePlay(pass info from selects) {
  //   // get info from the selects for the api called
  //   // fetch the api based on previous
  //   // .then console log (then dispatch to store)
  // }
  componentDidMount() {
    axios.get('https://opentdb.com/api_category.php')
    .then((response) => {
      this.setState({
        categories: response.data.trivia_categories
      })
    })
  }
  render() {
    console.log(this.state)
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
                      {this.state.categories.map((category) => {
                        return (
                          <option value={category.id}>{category.name}</option>
                        )
                      })}
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
                    <Button className="is-link"
                            onClick={() => this.props.openPage('game-page')}>
                            Play
                    </Button>
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
