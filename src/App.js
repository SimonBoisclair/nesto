import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'

import PageManager from './components/pageManager/pageManager.js';

import './reset.css';
import './App.css';
import './grid.css';

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <PageManager />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
