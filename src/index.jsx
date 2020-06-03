// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import channelsReducer from './reducers/channels_reducer';
import channelSelectedReducer from './reducers/channel_selected_reducer';
import messagesReducer from './reducers/messages_reducer';
import currentUserReducer from './reducers/current_user_reducer';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: channelSelectedReducer,
  currentUser: currentUserReducer
});

const initialState = {
  messages: [{
    author: "anonymous92",
    content: "Hello world!",
    created_at: "2017-09-26T23:03:16.365Z"
  },
  {
    author: "anonymous77",
    content: "My name is anonymous77",
    created_at: "2017-09-26T23:03:21.194Z"
  }],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const middlewares = applyMiddleware(promiseMiddleware, logger);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
