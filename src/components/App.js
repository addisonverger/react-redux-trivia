import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

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
  randomGIF() {
    axios.get('https://api.giphy.com/v1/stickers/random?api_key=3DtOtJIBdw5PBylAeiZEFPp0pAdKYlbH')
    .then((response) => {
      let responseURL = 'url(' + response.data.data.images.original.url + ')'
      document.body.style.backgroundImage = responseURL
    })
    .catch((error) => {console.log(error)})
  }
  getTriviaToken() {
    axios.get('https://opentdb.com/api_token.php?command=request')
    .then((response) => {
      this.props.updateToken(response.data.token)
    })
    .catch((error) => {console.log(error)})
  }
  componentDidMount() {
    this.randomGIF()
    this.getTriviaToken()
  }
  render() {
    const contents = {
      'home-page': <HomePage openPage={this.openPage}
                              randomGIF={this.randomGIF}/>,
      'game-page': <GamePage openPage={this.openPage}/>,
      'score-page': <ScorePage openPage={this.openPage}
                                score={this.props.score}
                                time={this.props.time}/>
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
  score: state.score,
  time: state.time
})

const mapDispatchToProps = (dispatch) => ({
  updateToken: (token) => dispatch({type: 'UPDATE_TOKEN', token: token})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
