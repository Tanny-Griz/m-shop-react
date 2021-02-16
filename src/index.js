// import './index.css'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import createRootReducer from './reducers'

import Layout from './containers/Layout/index.jsx'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Layout} />
      </Switch>
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
)

