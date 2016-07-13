import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'

import usersReducer from './reducers/usersReducer'
import App from './components/app' 

import { fetchUsers } from './actions/async'


let allreducers = combineReducers({
    users: usersReducer
})

const middleware = applyMiddleware(thunk); 
const store = createStore(allreducers, middleware) 

// ������������� ����������� �������� ������
store.dispatch(fetchUsers())
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)