import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../styles/App.css';
import HomePage from '../containers/Home-Page.js'
import GamePage from '../containers/Game-Page.js'
import ScorePage from '../containers/Score-Page.js'

import {Columns} from 'react-bulma-components/full';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'home-page'
    }
  }
  openPage = (currentPage) => {
    this.setState({
      currentPage: currentPage
    })
  }
  render() {
    const contents = {
      'home-page': <HomePage openPage={this.openPage}/>,
      'game-page': <GamePage openPage={this.openPage}
                            currentQuestion={this.props.currentQuestion}
                            updateQuestion={this.props.updateQuestion}
                            selectAnswer={this.props.selectAnswer}/>,
      'score-page': <ScorePage openPage={this.openPage}
                                score={this.props.score}/>
    }
    return (
      <div>
        <div className="trivia-app">
          <div className="page-wrapper">
            <Columns className="is-centered">
              <Columns.Column className="is-three-quarters">
                { contents[this.state.currentPage] }
              </Columns.Column>
            </Columns>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion,
  score: state.score
})

const mapDispatchToProps = (dispatch) => ({
  updateQuestion: () => dispatch({type: 'UPDATE_QUESTION'}),
  selectAnswer: (index) => dispatch({type: 'SELECT_ANSWER', index: index})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
