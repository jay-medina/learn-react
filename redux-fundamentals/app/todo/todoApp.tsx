import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './views/App.tsx';
import TodoAppReducer from './reducers/TodoAppReducer.ts';

class Provider extends React.Component<any,any>{
  static childContextTypes = {
    store: React.PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

export function initialize() {
  const store = createStore(TodoAppReducer);

  function print() {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, 
      document.getElementById('todoApp')
    );
  }

  print();

  store.subscribe(print);
}