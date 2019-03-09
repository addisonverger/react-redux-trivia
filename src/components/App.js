import React, { Component } from 'react';
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
      'game-page': <GamePage openPage={this.openPage}/>,
      'score-page': <ScorePage openPage={this.openPage}/>
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

export default App;
