import React, { Component } from 'react';
import '../styles/App.css';
import HomePage from '../containers/Home-Page.js'

import {Columns} from 'react-bulma-components/full';

class App extends Component {
  render() {
    return (
      <div>
        <div className="trivia-app">
          <div className="page-wrapper">
            <Columns className="is-centered">
              <Columns.Column className="is-three-quarters">
                <HomePage />
              </Columns.Column>
            </Columns>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
