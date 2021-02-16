import React from 'react'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import products from './products'



export default history => combineReducers({
    products,
    router: connectRouter(history)
})