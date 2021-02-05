import React from 'react';
import ReactDOM from 'react-dom';
import './css/nav.css';
import './css/index.css';
import './css/about.css';
import './css/contact.css';
import "./css/blog.css";
import './css/footer.css';
import './css/auth.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



