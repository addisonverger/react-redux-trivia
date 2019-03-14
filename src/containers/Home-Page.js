import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import About from './About.js'

import {Box} from 'react-bulma-components/full'
import {Section} from 'react-bulma-components/full'
import {Heading} from 'react-bulma-components/full'
import {Form} from 'react-bulma-components/full'
import {Button} from 'react-bulma-components/full'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      categoryValue: '',
      difficultyValue: ''
    }
  }
  componentDidMount() {
    axios.get('https://opentdb.com/api_category.php')
    .then((response) => {
      this.setState({
        categories: response.data.trivia_categories
      })
    })
    .catch((error) => {console.log(error)})
  }
  updateCategory(event) {
    this.setState({
      categoryValue: event.target.value
    })
  }
  updateDifficulty(event) {
    this.setState({
      difficultyValue: event.target.value
    })
  }
  handlePlay(event) {
    event.preventDefault()
    const categoryParam = (this.state.categoryValue === '' ? '' : '&category=' + this.state.categoryValue)
    const difficultyParam = (this.state.difficultyValue === '' ? '' : '&difficulty=' + this.state.difficultyValue)
    axios.get('https://opentdb.com/api.php?amount=10&type=multiple' +
    categoryParam + difficultyParam)
    .then((response) => {
      this.props.updateQuestionSet(response.data)
      this.props.openPage('game-page')
    })
    .catch((error) => {console.log(error)})
  }
  render() {
    return (
      <div>
        <Box className="m-auto">
          <Section>
            <div style={{textAlign: "center"}}>
              <Heading size={1}
                      className="has-text-dark headingFont"
                      style={{display: "inline-block", textAlign: "left"}}>
                small<br /> POTATOES
              </Heading>
            </div>
          </Section>
          <form onSubmit={(event) => this.handlePlay(event)}>
            <Form.Field>
              <Form.Label>
                Categories
              </Form.Label>
              <Form.Control>
                <Form.Select value={this.state.categoryValue}
                            onChange={(event) => this.updateCategory(event)}
                            className="is-fullwidth">
                  <option key="0" value="">
                    Any Category
                  </option>
                  {this.state.categories.map((category) => {
                    return (
                      <option key={category.id}
                              value={category.id}>
                        {category.name}
                      </option>
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
                <Form.Select value={this.state.difficultyValue}
                            onChange={(event) => this.updateDifficulty(event)}
                            className="is-fullwidth">
                  <option value="">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Form.Select>
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control>
                <Button className="is-link is-outlined is-fullwidth"
                        type="submit">
                  Play
                </Button>
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control>
                <About />
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control>
                <Button className="is-link is-outlined is-fullwidth"
                        type="button"
                        onClick={() => this.props.randomGIF()}>
                  Pick Your Toppings
                </Button>
              </Form.Control>
            </Form.Field>
          </form>
        </Box>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateQuestionSet: (response) => dispatch({type: 'UPDATE_QUESTION_SET', data: response})
})

export default connect(null, mapDispatchToProps)(HomePage)
