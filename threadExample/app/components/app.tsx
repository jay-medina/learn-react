import * as React from 'react';
import Thread from './thread.tsx';
import ThreadStarter from './threadStarter.tsx';


export interface AppProps {
  store: any,
  person: string
}

export class App extends React.Component<AppProps, {}> {
  renderThreads() {
    const state = this.props.store.getState();

    const keys = Object.keys(state);
    return keys.map(id => {
      return <Thread key={id} threadNodes={state[id]}></Thread>;
    });
  }
  render() {
    const {store, person} = this.props;
    console.log(`state is ${JSON.stringify(this.props.store.getState())}`);
    return (
      <div className="app">
      <ThreadStarter dispatch={store.dispatch} person={person}></ThreadStarter>
      {this.renderThreads()}
      </div>
    );
  }
}
